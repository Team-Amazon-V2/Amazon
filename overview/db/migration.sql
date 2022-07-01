CREATE DATABASE productoverview;



-- DROP TABLE IF EXISTS reviewinfo;

CREATE TABLE overviewinfo(
   id SERIAL PRIMARY KEY NOT NULL,
  
  productname VARCHAR(50),
  productoverview VARCHAR
);