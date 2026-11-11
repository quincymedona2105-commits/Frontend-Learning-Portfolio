use college_db;

create table courses (
    course_id int primary key auto_increment,
    course_name varchar(100) not null,
    duration int default 3,
    fees decimal(10,2) check (fees > 0),
    trainer_name varchar(100),
    start_date date
);

alter table courses add column course_status varchar(30);

alter table courses rename column trainer_name to instructor_name;

alter table courses modify column duration decimal(5,2) default 3;

alter table courses drop column start_date;

