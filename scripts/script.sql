CREATE DATABASE peliculas;

USE peliculas;

CREATE TABLE genero (
  id int AUTO_INCREMENT,
  nombre varchar(30),
  PRIMARY KEY (id)
);

CREATE TABLE actor (
  id int AUTO_INCREMENT,
  nombre varchar(70),
  PRIMARY KEY (id)
);

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

CREATE TABLE actor_pelicula (
  id int AUTO_INCREMENT,
  actor_id int,
  pelicula_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (actor_id) REFERENCES actor(id),
  FOREIGN KEY (pelicula_id) REFERENCES pelicula(id)  
);

ALTER TABLE pelicula ADD COLUMN genero_id INT;
ALTER TABLE pelicula ADD FOREIGN KEY (genero_id) REFERENCES genero(id);  
