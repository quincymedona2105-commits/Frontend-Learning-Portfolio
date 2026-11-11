use product_db;

rename table products to product_details;

alter table product_details rename column price to product_price;

alter table product_details drop column manufacture_date;