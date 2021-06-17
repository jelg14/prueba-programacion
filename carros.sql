create database if not exists carrosdb;
use carrosdb;
create table carros(
    id_carro int not null auto_increment,
    marca varchar(100) not null,
    modelo varchar(100) not null,
    año year not null,
    placa varchar (100) not null,
    estado not null,
    primary key (id_carro)
);