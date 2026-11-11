use company_db;

create table patients (
    patient_id int primary key auto_increment,
    patient_name varchar(100) not null,
    age int,
    gender varchar(20),
    disease varchar(100),
    admission_date date,
    doctor_name varchar(100)
);

alter table patients rename column disease to diagnosis;

alter table patients add column contact_number varchar(15);

alter table patients modify column patient_name varchar(150);

rename table patients to patient_records;