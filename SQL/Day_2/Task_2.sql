use company_db;

select * from employees;

alter table employees change emp_name employee_name varchar(30);

alter table employees modify salary decimal(12,2);

alter table employees add email varchar(30);
