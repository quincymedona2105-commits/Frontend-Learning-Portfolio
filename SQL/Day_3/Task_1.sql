use company_db;

select * from employees;

insert into employees (employee_name, email, salary, department, joining_date, status, city) values
('Arun', 'arun@gmail.com', 45000, 'IT', '2024-01-10', 1, 'Chennai'),
('Kumar', 'kumar@gmail.com', 35000, 'HR', '2024-02-15', 1, 'Madurai'),
('Priya', 'priya@gmail.com', 50000, 'IT', '2024-03-20', 1, 'Chennai'),
('Vijay', 'vijay@gmail.com', 28000, 'Finance', '2024-04-05', 1, 'Salem'),
('Divya', 'divya@gmail.com', 42000, 'HR', '2024-05-12', 1, 'Madurai'),
('Ajay', 'ajay@gmail.com', 38000, 'IT', '2024-06-18', 1, 'Pondicherry'),
('Kavya', 'kavya@gmail.com', 55000, 'Finance', '2024-07-22', 1, 'Chennai'),
('Ravi', 'ravi@gmail.com', 48000, 'HR', '2024-08-10', 1, 'Madurai'),
('Anu', 'anu@gmail.com', 60000, 'IT', '2024-09-15', 1, 'Chennai'),
('Mani', 'mani@gmail.com', 32000, 'Finance', '2024-10-20', 1, 'Salem'),
('Ram', 'ram@gmail.com', 25000, 'HR', '2024-11-05', 1, 'Chennai'),
('Siva', 'siva@gmail.com', 47000, 'IT', '2024-12-12', 1, 'Madurai'),
('Meena', 'meena@gmail.com', 39000, 'Finance', '2025-01-15', 1, 'Pondicherry'),
('John', 'john@gmail.com', 52000, 'HR', '2025-02-18', 1, 'Chennai'),
('Sneha', 'sneha@gmail.com', 65000, 'IT', '2025-03-25', 1, 'Madurai');

-- Question 1:

select * from employees where department = "IT" and salary > 30000;

-- Question 3:

select department, count(*) as total_employees from employees group by department;

use college_db;

select * from student_details;

insert into student_details (student_name, age, email, mobile_number, course, fees, admission_date, city) values
('Arun', 21, 'arun@gmail.com', '9876543210', 'BCA', 35000.00, '2024-06-10', 'Chennai'),
('Kumar', 22, 'kumar@gmail.com', '9876543211', 'BSc Computer Science', 40000.00, '2024-06-15', 'Madurai'),
('Priya', 20, 'priya@gmail.com', '9876543212', 'BCA', 35000.00, '2024-07-01', 'Salem'),
('Vijay', 23, 'vijay@gmail.com', '9876543213', 'BCom', 30000.00, '2024-07-05', 'Pondicherry'),
('Divya', 21, 'divya@gmail.com', '9876543214', 'BSc Mathematics', 32000.00, '2024-08-10', 'Chennai'),
('Ajay', 22, 'ajay@gmail.com', '9876543215', 'BCA', 35000.00, '2024-08-15', 'Villupuram'),
('Kavya', 20, 'kavya@gmail.com', '9876543216', 'BSc Computer Science', 40000.00, '2024-09-01', 'Madurai'),
('Ravi', 24, 'ravi@gmail.com', '9876543217', 'BBA', 38000.00, '2024-09-10', 'Trichy'),
('Meena', 19, 'meena@gmail.com', '9876543218', 'BCA', 35000.00, '2024-10-05', 'Kallakurichi'),
('Sneha', 22, 'sneha@gmail.com', '9876543219', 'BCom', 30000.00, '2024-10-15', 'Chennai');


-- Question 2:

select * from student_details where age between 18 and 25 and city in ('Chennai', 'Madurai');


use product_db;

select * from product_details;

insert into product_details (product_name, product_code, category, product_price, stock, brand, expiry_date, is_available) values
('Laptop', 'PROD001', 'Electronics', 55000.00, 10, 'Dell', '2028-12-31', 1),
('Smartphone', 'PROD002', 'Electronics', 25000.00, 20, 'Samsung', '2028-12-31', 1),
('Wireless Mouse', 'PROD003', 'Accessories', 750.00, 50, 'Logitech', '2029-06-30', 1),
('Keyboard', 'PROD004', 'Accessories', 1200.00, 35, 'HP', '2029-06-30', 1),
('Office Chair', 'PROD005', 'Furniture', 4500.00, 15, 'Godrej', '2030-12-31', 1),
('Study Table', 'PROD006', 'Furniture', 6500.00, 8, 'Nilkamal', '2030-12-31', 1),
('Notebook', 'PROD007', 'Stationery', 60.00, 100, 'Classmate', '2029-12-31', 1),
('Pen', 'PROD008', 'Stationery', 15.00, 200, 'Reynolds', '2029-12-31', 1),
('Water Bottle', 'PROD009', 'Home Appliances', 350.00, 40, 'Milton', '2028-06-30', 1),
('Headphones', 'PROD010', 'Electronics', 1800.00, 0, 'boAt', '2029-12-31', 0);

-- Question 4:

select category, sum(stock) as total_stock, avg(product_price) as average_price from product_details group by category;

