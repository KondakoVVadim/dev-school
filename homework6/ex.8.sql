create table users (
    id serial primary key ,
    username varchar(255) unique not null,
    email varchar(255) unique not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    password varchar(255) not null
);