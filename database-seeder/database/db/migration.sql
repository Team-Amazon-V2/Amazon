DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS qanda;
DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS product_specs;
DROP TABLE IF EXISTS related_products;

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
    question_id SERIAL PRIMARY KEY,
    question_title TEXT,
    question_date VARCHAR,
    answer_text TEXT,
    question_user VARCHAR,
    asin_id VARCHAR 
);

CREATE TABLE review(
    review_id SERIAL PRIMARY KEY,
    rating NUMERIC,
    review_title TEXT,
    review_body TEXT,
    asin_id VARCHAR
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

CREATE TABLE product_categories(
    category_id SERIAL PRIMARY KEY,
    category TEXT,
    asin_id INTEGER[]
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
