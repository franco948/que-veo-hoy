CREATE DATABASE peliculas;

USE peliculas;

CREATE TABLE pelicula (
  id int AUTO_INCREMENT,
  titulo varchar(100),
  duracion int,
  director varchar(400),
  anio int,
  fecha_lanzamiento date,
  puntuacion int,
  poster varchar(300),
  trama varchar(700),
  PRIMARY KEY (id)
);