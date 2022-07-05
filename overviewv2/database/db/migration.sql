DROP TABLE IF EXISTS overview;

CREATE TABLE overview(
    id SERIAL PRIMARY KEY,
    overview TEXT[],
    asin_id VARCHAR
);

INSERT INTO overview (overview, asin_id) 
    VALUES (
        ARRAY ['https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_01._CB626751726_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_02._CB626751726_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_03._CB626751726_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_04._CB626751726_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_05._CB626751726_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_06._CB626751726_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_07._CB626751726_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_08._CB626751726_.jpg',
        'https://m.media-amazon.com/images/G/01/appcore/tablet/iPad_Air_Product_Page_Alt_L_5G_Amazon__en-US_09._CB626751726_.jpg'],
        'B09V3HN1KC'
    );