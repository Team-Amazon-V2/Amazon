DROP DATABASE IF EXISTS amazon_db;

CREATE DATABASE amazon_db;

\c amazon_db;

DROP TABLE IF EXISTS cart;

CREATE TABLE cart(
   id integer,
   item TEXT NOT NULL,
   price integer
);
