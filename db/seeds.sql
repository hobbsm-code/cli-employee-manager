-- Insert sample data into department table
INSERT INTO department (name) VALUES 
('Sales'),
('Marketing'),
('Engineering'),
('Human Resources'),
('Finance'),
('Customer Support'),
('Product Management'),
('IT'),
('Legal'),
('Research and Development');

INSERT INTO role (title, salary, department_id) VALUES 
('Sales Representative', 50000.00, 1),
('Marketing Manager', 60000.00, 2),
('Software Engineer', 80000.00, 3),
('HR Specialist', 55000.00, 4),
('Financial Analyst', 70000.00, 5),
('Customer Support Agent', 40000.00, 6),
('Product Manager', 90000.00, 7),
('IT Support Technician', 45000.00, 8),
('Legal Counsel', 100000.00, 9),
('Research Scientist', 85000.00, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),        -- John has no manager
('Jane', 'Smith', 2, 1),         -- Jane reports to John
('Alice', 'Johnson', 3, 1),      -- Alice reports to John
('Bob', 'Brown', 4, 2),          -- Bob reports to Jane
('Charlie', 'Davis', 5, 2),      -- Charlie reports to Jane
('Emily', 'Wilson', 6, 1),       -- Emily reports to John
('David', 'Martinez', 7, 3),     -- David reports to Alice
('Sophia', 'Garcia', 8, 3),      -- Sophia reports to Alice
('Michael', 'Rodriguez', 9, 4),  -- Michael reports to Bob
('Olivia', 'Hernandez', 10, 5),  -- Olivia reports to Charlie
('Liam', 'Lopez', 1, 6),         -- Liam reports to Emily
('Mia', 'Gonzalez', 2, 6),       -- Mia reports to Emily
('Noah', 'Perez', 3, 7),         -- Noah reports to David
('Isabella', 'Sanchez', 4, 8),   -- Isabella reports to Sophia
('Ethan', 'Anderson', 5, 9),     -- Ethan reports to Michael
('Ava', 'Thomas', 6, 10);        -- Ava reports to Olivia