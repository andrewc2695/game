import sqlite3
import queries

connection = sqlite3.connect("plans_and_managers.db")
cursor = connection.cursor()
# for managers we need an empolyee table which will be id, name
# then we want a manager table which will connect employee to employee as employye and manager
cursor.execute("drop table if exists employee")
cursor.execute("drop table if exists manager")
cursor.execute("drop table if exists plan")
cursor.execute("drop table if exists phase")
cursor.execute("drop table if exists phase_risk")


cursor.execute("create table employee (id integer PRIMARY KEY, name text NOT NULL)")
cursor.execute("create table manager (employee_id integer NOT NULL, manager_id integer NOT NULL, FOREIGN KEY(employee_id) REFERENCES employee(id), FOREIGN KEY(manager_id) REFERENCES employee(id))")
cursor.execute("create table plan (id integer PRIMARY KEY, name text NOT NULL, author_id integer NOT NULL, FOREIGN KEY(author_id) REFERENCES employee(id))")
cursor.execute("create table phase_risk (type text PRIMARY KEY NOT NULL UNIQUE)")
cursor.execute("create table phase (id integer PRIMARY KEY, plan_id integer NOT NULL, approver_id integer, risk text NOT NULL, FOREIGN KEY(approver_id) REFERENCES employee(id), FOREIGN KEY(plan_id) REFERENCES plan(id), FOREIGN KEY(risk) REFERENCES phase_risk(risk) )")

empolyee_seeds = [
    # 1
    ("Cherry Blossom",),
    # 2
    ("Ty Ayelloribbin",),
    # 3
    ("Hugo First",),
    # 4
    ("Percy Vere",),
    # 5
    ("Jack Aranda",),
    # 6
    ("Olive Tree",),
    # 7
   ("Fran G. Pani",),
    # 8
    ("John Quil",),
    # 9
    ("Ev R. Lasting",),
    # 10
    ("Anne Thurium",),
    # 11
    ("Glad I. Oli",),
    # 12
    ("Ginger Plant",),
]

phase_risks_seeds = [('high',), ('moderate',), ('low',)]

cursor.executemany("insert into employee (name) values (?)", empolyee_seeds)
cursor.executemany("insert into phase_risk values (?)", phase_risks_seeds)
# creates dictionary to set up many to many db
employee_ids_and_names = {}
for row in cursor.execute("select * from employee"):
    employee_ids_and_names[row[1]] = row[0]

employee_hierachy_seed = [(employee_ids_and_names["Ty Ayelloribbin"], employee_ids_and_names["Cherry Blossom"]),
                     (employee_ids_and_names["Hugo First"],
                      employee_ids_and_names["Cherry Blossom"]),
                     (employee_ids_and_names["Olive Tree"],
                      employee_ids_and_names["Cherry Blossom"]),
                     (employee_ids_and_names["Percy Vere"],
                      employee_ids_and_names["Ty Ayelloribbin"]),
                     (employee_ids_and_names["Jack Aranda"],
                     employee_ids_and_names["Hugo First"]),
                     (employee_ids_and_names["Jack Aranda"],
                     employee_ids_and_names["Percy Vere"]),
                     (employee_ids_and_names["Jack Aranda"],
                     employee_ids_and_names["Ty Ayelloribbin"]),
                     (employee_ids_and_names["Olive Tree"],
                     employee_ids_and_names["Hugo First"]),
                     (employee_ids_and_names["Fran G. Pani"],
                     employee_ids_and_names["Hugo First"]),
                     (employee_ids_and_names["Glad I. Oli"],
                     employee_ids_and_names["Hugo First"]),
                     (employee_ids_and_names["John Quil"],
                     employee_ids_and_names["Percy Vere"]),
                     (employee_ids_and_names["Ev R. Lasting"],
                     employee_ids_and_names["Jack Aranda"]),
                     (employee_ids_and_names["Ginger Plant"],
                     employee_ids_and_names["Hugo First"]),
                     (employee_ids_and_names["Ginger Plant"],
                     employee_ids_and_names["Jack Aranda"]),
                     (employee_ids_and_names["Anne Thurium"],
                     employee_ids_and_names["Ev R. Lasting"]),
                     (employee_ids_and_names["Anne Thurium"],
                     employee_ids_and_names["John Quil"]),
                     (employee_ids_and_names["Anne Thurium"],
                     employee_ids_and_names["Fran G. Pani"]),
                     (employee_ids_and_names["Ev R. Lasting"],
                     employee_ids_and_names["Percy Vere"]),
                     ]
cursor.executemany("insert into manager values(?, ?)", employee_hierachy_seed)

plans_seed = [
    ('plan1', employee_ids_and_names["John Quil"],),
    ('plan2', employee_ids_and_names["Anne Thurium"],),
    ('plan3', employee_ids_and_names["Ginger Plant"],),
    ('plan4', employee_ids_and_names["Ty Ayelloribbin"]),
    ('plan5', employee_ids_and_names["Fran G. Pani"])
]

phases_seed = [
    (1, None, 'low'),
    (1, 4, 'moderate'),
    (1, None, 'high'),
    (2, None, 'low'),
    (2, 8, 'moderate'),
    (2, None, 'high'),
    (3, employee_ids_and_names["Ginger Plant"], 'low'),
    (3, None, 'high'),
    (3, None, 'high'),
    (3, None, 'high'),
    (3, None, 'moderate'),
    (4, None, 'moderate'),
    (4, None, 'moderate'),
    (4, None, 'moderate'),
    (5, None, 'moderate'),
    (5, None, 'high')
]

cursor.executemany("insert into plan (name, author_id) values (?, ?)", plans_seed)
cursor.executemany("insert into phase (plan_id, approver_id, risk) values(?,?,?)", phases_seed)

connection.commit()
connection.close()