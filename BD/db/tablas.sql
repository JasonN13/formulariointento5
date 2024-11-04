-- Active: 1715485426440@@LocalHost@5432@formulario
CREATE TABLE registro(
    id SERIAL NOT NULL PRIMARY KEY,
    nombre varchar(100),
    apellido varchar(100),
    telefono varchar(100),
    correo varchar(200),
    fnacimiento date,
    edad integer
);