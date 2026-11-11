create database college_db;

use college_db;

create table students (
    student_id int primary key auto_increment,
    student_name varchar(100) not null,
    age int check (age >= 18),
    email varchar(100) not null unique,
    mobile_number varchar(15),
    course varchar(50),
    fees decimal(10,2) check (fees > 0),
    admission_date date,
    city varchar(50) default 'Chennai'
);

