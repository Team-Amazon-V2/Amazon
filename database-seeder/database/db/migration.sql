-- DROP DATABASE IF EXISTS amazon;

-- CREATE DATABASE amazon;
-- \c amazon

-- DROP TABLE IF EXISTS product;

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    asin_id VARCHAR,
    product_name VARCHAR,
    picture TEXT ARRAY,
    rating NUMERIC,
    product_dimensions VARCHAR,
    item_weight VARCHAR,
    manufacturer_name VARCHAR,
    country TEXT,
    model_number VARCHAR,
    batteries VARCHAR,
    date_available VARCHAR,
    box_info TEXT ARRAY
    review_id INT REFERENCES review(review_id)
    question id INT REFERENCES qanda(question_id)
);

CREATE TABLE qanda(
    question_id SERIAL PRIMARY KEY,
    question_title TEXT,
    question_date VARCHAR,
    answer_text TEXT,
    asin_id VARCHAR REFERENCES product(asin_id)
);

CREATE TABLE review(
    review_id INT PRIMARY KEY,
    rating NUMERIC,
    asin_id VARCHAR REFERENCES product(asin_id)
    review_title TEXT,
    review_body TEXT
);