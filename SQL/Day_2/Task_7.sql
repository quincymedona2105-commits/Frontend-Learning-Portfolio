use college_db;

create table staff (
    staff_id int primary key auto_increment,
    name varchar(100) not null,
    department varchar(50),
    salary decimal(10,2),
    city varchar(50)
);

insert into staff (name, department, salary, city) values
('Arun', 'HR', 25000, 'Chennai'),
('Kumar', 'IT', 35000, 'Pondicherry'),
('Priya', 'HR', 30000, 'Villupuram'),
('Vijay', 'IT', 40000, 'Salem'),
('Divya', 'Finance', 28000, 'Madurai'),
('Ajay', 'HR', 32000, 'Trichy'),
('Kavya', 'IT', 45000, 'Coimbatore'),
('Ravi', 'Finance', 29000, 'Salem');

update staff set salary = 45000 where staff_id = 3;

update staff set department = 'IT' where staff_id = 5;

update staff set salary = salary + 5000 where department = 'HR';


