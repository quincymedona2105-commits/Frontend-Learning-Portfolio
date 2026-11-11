create database library_db;

use library_db;

create table books (
    book_id int primary key auto_increment,
    book_name varchar(100) not null,
    author varchar(100),
    price decimal(10,2),
    published_date date
);

insert into books (book_name, author, price, published_date) values
('wings of fire', 'apj abdul kalam', 350.00, '1999-01-01'),
('rich dad poor dad', 'robert kiyosaki', 450.00, '1997-04-01'),
('the alchemist', 'paulo coelho', 300.00, '1988-01-01'),
('atomic habits', 'james clear', 500.00, '2018-10-16'),
('think and grow rich', 'napoleon hill', 400.00, '1937-01-01');

select * from books;

truncate table books;

select * from books;
