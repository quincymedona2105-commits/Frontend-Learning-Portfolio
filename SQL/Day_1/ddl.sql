create database warehouse;

use warehouse;

create table warehouse (
    id int primary key auto_increment,
    warehouse_name varchar(30) not null,
    warehouse_number varchar(30) unique not null,
    warehouse_location varchar(100) not null,
    warehouse_price decimal(10,2) not null default 0.00,
    warehouse_area_number varchar(30) not null,
    warehouse_active boolean not null default true,
    warehouse_created_date date not null default (current_date),
    warehouse_created_at timestamp default current_timestamp
);

create table product(
    product_id int primary key auto_increment,
    product_name varchar(100) not null,
    product_quantity int not null default 0,
    product_price decimal(10,2) not null default 0.00,
    product_category varchar(50) not null,
    product_barcode varchar(50) unique not null,
    product_adddate date not null default (current_date),
    isActive boolean default true
);
