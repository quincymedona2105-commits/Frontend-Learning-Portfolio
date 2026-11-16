CREATE DATABASE student_db;

USE student_db;

CREATE TABLE student_course (
    student_id INT,
    student_name VARCHAR(50),
    course_name VARCHAR(50),
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15),
    PRIMARY KEY(student_id, course_name)
);

INSERT INTO student_course VALUES
(101,'Arun','Python','Kumar','9876543210'),
(101,'Arun','Java','Priya','9876543211'),
(102,'Bala','Python','Kumar','9876543210'),
(103,'Divya','SQL','Ravi','9876543212'),
(104,'Ravi','Java','Priya','9876543211');

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
);

CREATE TABLE courses (
    course_name VARCHAR(50) PRIMARY KEY,
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15)
);

CREATE TABLE enrollment (
    student_id INT,
    course_name VARCHAR(50),
    PRIMARY KEY(student_id, course_name),
    FOREIGN KEY(student_id) REFERENCES students(student_id),
    FOREIGN KEY(course_name) REFERENCES courses(course_name)
);

CREATE TABLE trainers (
    trainer_id INT PRIMARY KEY,
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15)
);

CREATE TABLE courses_3nf (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    trainer_id INT,
    FOREIGN KEY(trainer_id) REFERENCES trainers(trainer_id)
);
