use college_db;

select * from students;

rename table students to student_details;

alter table student_details add mobile_number varchar(30);
