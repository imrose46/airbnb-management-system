-- Insert sample data for users (hosts and guests)
INSERT INTO users (user_id, username, email, password) 
VALUES (1, 'john_doe', 'john@example.com', 'password123');
INSERT INTO users (user_id, username, email, password) 
VALUES (2, 'jane_smith', 'jane@example.com', 'password456');
INSERT INTO users (user_id, username, email, password) 
VALUES (3, 'alex_wilson', 'alex@example.com', 'password789');
-- Continue inserting 50-60 users

-- Insert sample data for listings
INSERT INTO listings (listing_id, host_id, title, description, price_per_night, location)
VALUES (1, 1, 'Cozy Apartment in New York', 'A beautiful apartment in downtown New York. Perfect for a weekend getaway.', 150, 'New York, USA');
INSERT INTO listings (listing_id, host_id, title, description, price_per_night, location)
VALUES (2, 2, 'Modern Studio in Los Angeles', 'A stylish and modern studio in the heart of Los Angeles.', 200, 'Los Angeles, USA');
INSERT INTO listings (listing_id, host_id, title, description, price_per_night, location)
VALUES (3, 3, 'Luxury Villa in Bali', 'Experience luxury in this villa with a private pool and ocean view.', 350, 'Bali, Indonesia');
-- Continue inserting 20 listings

-- Insert sample data for bookings
INSERT INTO bookings (booking_id, guest_id, listing_id, check_in_date, check_out_date)
VALUES (1, 2, 1, TO_DATE('2024-12-01', 'YYYY-MM-DD'), TO_DATE('2024-12-05', 'YYYY-MM-DD'));
INSERT INTO bookings (booking_id, guest_id, listing_id, check_in_date, check_out_date)
VALUES (2, 3, 2, TO_DATE('2024-12-10', 'YYYY-MM-DD'), TO_DATE('2024-12-15', 'YYYY-MM-DD'));
INSERT INTO bookings (booking_id, guest_id, listing_id, check_in_date, check_out_date)
VALUES (3, 1, 3, TO_DATE('2024-12-20', 'YYYY-MM-DD'), TO_DATE('2024-12-25', 'YYYY-MM-DD'));
-- Continue inserting 20 bookings
