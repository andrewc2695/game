import sqlite3
import pprint
import queries

connection = sqlite3.connect("plans_and_managers.db")
cursor = connection.cursor()

def get_plan_data(plan_id):
    plan_data = {}
    moderate_approvers = []
    high_approvers = []
    plan_d = connection.execute(
        f'SELECT p.id, p.name, p.author_id, e.name, ph.risk, ph.approver_id, e1.name, ph.id FROM employee e LEFT JOIN plan p on e.id=p.author_id LEFT JOIN phase ph ON p.id = ph.plan_id LEFT JOIN employee e1 ON ph.approver_id=e1.id  WHERE p.id={plan_id}')
    for row in plan_d:
        if not 'plan_name' in plan_data:
            plan_data['plan_name'] = row[1]
            plan_data['plan_id'] = row[0]
            plan_data['author_id'] = row[2]
            plan_data['author_name'] = row[3]
            plan_data['phases'] = []
        if row[5] == None:
            plan_data['phases'].append({'phase_id': row[7], 'risk': row[4], 'possible_approvers': []})
        else:
            plan_data['phases'].append({'phase_id': row[7], 'risk': row[4], 'approver': [{'name': row[6], 'id': row[5]}]})

    # now for all phases that are high/med risk with no approver we need to get possible approvers
    for phase in plan_data['phases']:
        if phase['risk'] == 'low' and 'possible_approvers' in phase:
            phase['possible_approvers'] = [{'name': plan_data['author_name'], 'id': plan_data['author_id']}]

        if phase['risk'] == 'moderate' and 'possible_approvers' in phase:
            if len(moderate_approvers) == 0:
                moderate_approvers.extend(get_moderate_risk_approvers(plan_data['author_id']))
            phase['possible_approvers'] = moderate_approvers
            
        if phase['risk'] == 'high' and 'possible_approvers' in phase:
            if len(high_approvers) == 0:
                high_approvers = get_high_risk_approvers(plan_data['author_id'])
            phase['possible_approvers'] = high_approvers
    
    pprint.pprint(plan_data)

        


def get_moderate_risk_approvers(author_id):
    managers_list = []
    managers = connection.execute(f'SELECT DISTINCT m.manager_id, e.name from manager m JOIN employee e ON m.manager_id=e.id WHERE m.employee_id={author_id}').fetchall()
    for manager in managers:
        managers_list.append({'name': manager[1], 'id': manager[0]})
    
    if len(managers) == 0:
        # if user has no direct manager assume they are CEO and can approve themselves
        return get_ceo()
    return managers_list

def get_high_risk_approvers(author_id):
    managers_list = []
    managers = connection.execute(
        f'WITH eh AS (SELECT m.manager_id as managerId, 1 AS Level FROM manager m WHERE employee_id={author_id} UNION ALL SELECT m1.manager_id, eh.level + 1 FROM eh, manager m1 WHERE eh.managerId=m1.employee_id) SELECT DISTINCT e.name, eh.managerId from eh JOIN employee e ON eh.managerId=e.id WHERE level >= 2 AND level <=3 ORDER BY level desc').fetchall()
    for manager in managers:
        managers_list.append({'name': manager[0], 'id': manager[1]})
    
    if len(managers) == 0:
        # if users manager has no direct manager assume they are under CEO and need CEO approval
        return get_ceo()
    return managers_list

def get_shortest_path_to_ceo(author_id):
    paths = connection.execute(
        f'WITH eh AS (SELECT m.manager_id as managerId, 1 AS Level FROM manager m WHERE employee_id={author_id} UNION ALL SELECT m1.manager_id, eh.level + 1 FROM eh, manager m1 WHERE eh.managerId=m1.employee_id) SELECT level from eh JOIN employee e ON eh.managerId=e.id LEFT JOIN manager m2 ON e.id=m2.employee_id WHERE m2.manager_id IS NULL ORDER BY level asc LIMIT 1'
    ).fetchall()
    if len(paths) == 0:
        print('No path to CEO Found, user is potentially CEO')
        return 0
    else:
        length = paths[0][0]
        print(f'Shortest path is {length}')
        return length

def get_ceo():
    return connection.execute(f'Select e.name, e.id FROM employee e LEFT JOIN manager m ON e.id=m.employee_id WHERE m.manager_id IS NULL').fetchall()
    

def approve_phase(phase_id, approver_id):
    phase = connection.execute(f'SELECT ph.id, ph.approver_id, ph.risk, p.author_id, e.name FROM phase ph JOIN plan p ON ph.plan_id=p.id JOIN employee e ON p.author_id=e.id WHERE ph.id={phase_id}').fetchall()
    if(len(phase)):
        maybe_approver_id = phase[0][1]
        phase_risk = phase[0][2]
        plan_author_id = phase[0][3]
        plan_author_name = phase[0][4]
        approvers = []
        
        if maybe_approver_id:
            raise Exception('ERROR: phase already approved')
        elif phase_risk == 'low':
            approvers = [{'name': plan_author_name, 'id': plan_author_id}]
        elif phase_risk == 'moderate':
            approvers = get_moderate_risk_approvers(plan_author_id)
        elif phase_risk == 'high':
            approvers = get_high_risk_approvers(plan_author_id)
        
        for approver in approvers:
            if approver['id'] == approver_id:
                connection.execute(f'UPDATE phase SET approver_id={approver_id} WHERE id={phase_id}')
                connection.commit()
                print('Succesfully approved phase')
                return
        raise Exception(f'approver_id {approver_id} not valid for phase')
 
    else:
        raise Exception('ERROR: no phase found!')
    

def get_plans_not_fully_approved():
    plans = cursor.execute(queries.get_plans_not_fully_approved()).fetchall()
    for plan in plans:
        print(plan)
    return plans

def get_plans_approved_by_employee_id(employee_id):
    plans = cursor.execute(queries.get_plans_approved_by_employee_id(employee_id)).fetchall()
    for plan in plans:
        print(plan)
    return plans


def add_phase_to_plan(plan_id, risk):
    cursor.execute(queries.add_phase_to_plan(plan_id, risk))
    connection.commit()
    print('Succesfully Added phase to plan')



        
        


# get_plan_data(1)
# get_moderate_risk_approvers(9)
# get_high_risk_approvers(9)
# get_shortest_path_to_ceo(10)
# approve_phase(16, 1)
# get_plans_not_fully_approved()
# get_plans_approved_by_employee_id(7)
# add_phase_to_plan(5, 'low')
