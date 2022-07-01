

CREATE DATABASE productreview;



-- DROP TABLE IF EXISTS reviewinfo;

CREATE TABLE reviewinfo(
   id SERIAL PRIMARY KEY NOT NULL,
  
  name VARCHAR(50),
  review VARCHAR(500)
);