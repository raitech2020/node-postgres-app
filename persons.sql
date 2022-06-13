DROP TABLE persons;
CREATE TABLE IF NOT EXISTS persons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255)
);
