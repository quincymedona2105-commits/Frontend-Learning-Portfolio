use product_db;

create table customers (
    customer_id int primary key auto_increment,
    name varchar(100) not null,
    email varchar(100) unique,
    city varchar(50),
    age int,
    registration_date date
);

insert into customers (name, email, city, age, registration_date) values
('Arun', 'arun@gmail.com', 'Chennai', 22, '2026-01-10'),
('Kumar', 'kumar@gmail.com', 'Pondicherry', 24, '2026-01-11'),
('Priya', 'priya@gmail.com', 'Villupuram', 21, '2026-01-12'),
('Divya', 'divya@gmail.com', 'Chennai', 23, '2026-01-13'),
('Vijay', 'vijay@gmail.com', 'Salem', 25, '2026-01-14'),
('Ajay', 'ajay@gmail.com', 'Madurai', 26, '2026-01-15'),
('Kavya', 'kavya@gmail.com', 'Trichy', 22, '2026-01-16'),
('Ravi', 'ravi@gmail.com', 'Chennai', 27, '2026-01-17'),
('Anu', 'anu@gmail.com', 'Coimbatore', 20, '2026-01-18'),
('Mani', 'mani@gmail.com', 'Pondicherry', 28, '2026-01-19');

insert into customers (name, email, city, age, registration_date) values ('Ram', 'ram@gmail.com', 'Chennai', 29, '2026-02-01');

insert into customers (name, email, city, age, registration_date) values ('Siva', 'siva@gmail.com', 'Salem', 30, '2026-02-02');

