create database studentdb;

use studentdb;

create table students (
    student_id int primary key auto_increment,
    student_name varchar(100) not null,
    age int check (age >= 18),
    email varchar(100) unique,
    city varchar(50) default 'Chennai',
    admission_date date
);