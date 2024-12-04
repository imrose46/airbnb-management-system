-- Create table for users (hosts and guests)
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR2(50) NOT NULL,
    email VARCHAR2(100) NOT NULL,
    password VARCHAR2(100) NOT NULL
);

-- Create table for listings
CREATE TABLE listings (
    listing_id INT PRIMARY KEY,
    host_id INT,
    title VARCHAR2(100) NOT NULL,
    description VARCHAR2(500),
    price_per_night DECIMAL(10, 2),
    location VARCHAR2(200),
    FOREIGN KEY (host_id) REFERENCES users(user_id)
);

-- Create table for bookings
CREATE TABLE bookings (
    booking_id INT PRIMARY KEY,
    guest_id INT,
    listing_id INT,
    check_in_date DATE,
    check_out_date DATE,
    FOREIGN KEY (guest_id) REFERENCES users(user_id),
    FOREIGN KEY (listing_id) REFERENCES listings(listing_id)
);
