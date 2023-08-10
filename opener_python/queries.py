def get_plans_approved_by_employee_id(employee_id):
    return f'SELECT p.* from plan p LEFT JOIN phase ph on p.id=ph.plan_id WHERE ph.approver_id="{employee_id}"'

def get_plans_not_fully_approved():
    return 'SELECT p.* from plan p LEFT JOIN phase ph on p.id=ph.plan_id WHERE ph.approver_id is Null GROUP BY p.id'

def add_phase_to_plan(plan_id, risk):
    return f'INSERT INTO phase (plan_id, risk) values("{plan_id}", "{risk}")'

    
