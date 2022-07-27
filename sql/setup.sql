-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists cats;

CREATE table cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    year INT NOT NULL,
    lives INT NOT NULL,
    isSideKick BOOLEAN 
);

INSERT INTO cats (name, type, year, url, lives, isSideKick) VALUES
('Felix', 'Tuxedo', 1892, 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png', 3, true),

('Garfield', 'Orange Tabby', 1978, 'https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg', 7, false),

('Duchess', 'Angora', 1970, 'https://static.wikia.nocookie.net/disney/images/e/eb/Profile_-_Duchess.jpeg', 9, false),

('Tigger', 'Tiger', 1928, 'https://www.pinclipart.com/picdir/big/150-1504133_tigger-tigger-cartoon-me-clipart-png-image-download.png', 8, false);


