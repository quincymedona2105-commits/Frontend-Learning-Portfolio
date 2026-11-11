use product_db;

create table orders (
    order_id int primary key auto_increment,
    customer_name varchar(100),
    product_name varchar(100),
    quantity int,
    price decimal(10,2),
    order_date date
);

insert into orders (customer_name, product_name, quantity, price, order_date) values
('Arun', 'Laptop', 2, 45000, '2026-01-10'),
('Kumar', 'Mouse', 5, 400, '2026-01-11'),
('Priya', 'Keyboard', 3, 800, '2026-01-12'),
('Vijay', 'Pen Drive', 1, 350, '2026-01-13'),
('Divya', 'Monitor', 2, 12000, '2026-01-14'),
('Ajay', 'Headphones', 4, 1500, '2026-01-15'),
('Kavya', 'USB Cable', 1, 200, '2026-01-16'),
('Ravi', 'Printer', 2, 8500, '2026-01-17'),
('Anu', 'Notebook', 6, 100, '2026-01-18'),
('Mani', 'Charger', 3, 600, '2026-01-19');

delete from orders where order_id = 4;

