DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS qanda;
DROP TABLE IF EXISTS product_specs;
DROP TABLE IF EXISTS related_products;
DROP TABLE IF EXISTS overviewinfo;
DROP TABLE IF EXISTS reviewinfo;
DROP TABLE IF EXISTS photo_gallery;
DROP TABLE IF EXISTS cart;

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR,
    picture TEXT[],
    rating NUMERIC,
    reviews INTEGER,
    category TEXT,
    price NUMERIC,
    options TEXT[],
    about TEXT[],
    asin_id VARCHAR,
    overview TEXT[]
);

CREATE TABLE qanda(
    id SERIAL PRIMARY KEY,
    question_id VARCHAR,
    question_title TEXT,
    question_date VARCHAR,
    answer_text TEXT,
    question_user VARCHAR,
    asin_id VARCHAR 
);

CREATE TABLE reviewinfo(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50),
    review VARCHAR(500)
);

CREATE TABLE overviewinfo(
    id SERIAL PRIMARY KEY NOT NULL,
    productname VARCHAR(50),
    productoverview VARCHAR
);

CREATE TABLE product_specs (
    product_id SERIAL PRIMARY KEY NOT NULL,
    product_dimensions VARCHAR,
    item_weight VARCHAR,
    manufacturer_name VARCHAR,
    country VARCHAR,
    model_number VARCHAR,
    batteries VARCHAR,
    date_available VARCHAR,
    box_info text[],
    asin_id VARCHAR
);

CREATE TABLE related_products(
    id SERIAL UNIQUE PRIMARY KEY,
    asin_id VARCHAR,
    picture TEXT,
    product_name TEXT,
    rating NUMERIC,
    reviews INTEGER,
    category TEXT,
    price NUMERIC
);

CREATE TABLE cart(
   id integer,
   item TEXT NOT NULL,
   price integer
);

CREATE TABLE photo_gallery(
    id SERIAL PRIMARY KEY,
    image TEXT[],
    asin_id VARCHAR
);
