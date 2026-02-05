-- ===========================
-- LUXE PALACE Database Schema
-- ===========================

-- Create Database
CREATE DATABASE IF NOT EXISTS luxe_palace CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE luxe_palace;

-- ===========================
-- Users Table
-- ===========================
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    role ENUM('guest', 'admin', 'staff') DEFAULT 'guest',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    status ENUM('active', 'inactive', 'banned') DEFAULT 'active',
    INDEX idx_email (email),
    INDEX idx_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Rooms Table
-- ===========================
CREATE TABLE IF NOT EXISTS rooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    room_number VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    type ENUM('standard', 'deluxe', 'suite') NOT NULL,
    capacity INT NOT NULL,
    price_per_night DECIMAL(10, 2) NOT NULL,
    size VARCHAR(20),
    description TEXT,
    image_url VARCHAR(500),
    status ENUM('available', 'occupied', 'maintenance', 'reserved') DEFAULT 'available',
    floor INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_type (type),
    INDEX idx_status (status),
    INDEX idx_capacity (capacity)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Room Features Table
-- ===========================
CREATE TABLE IF NOT EXISTS room_features (
    feature_id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT NOT NULL,
    feature_name VARCHAR(100) NOT NULL,
    icon VARCHAR(50),
    FOREIGN KEY (room_id) REFERENCES rooms(room_id) ON DELETE CASCADE,
    INDEX idx_room_id (room_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Bookings Table
-- ===========================
CREATE TABLE IF NOT EXISTS bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guests INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'checked_in', 'checked_out', 'cancelled') DEFAULT 'pending',
    payment_status ENUM('pending', 'partial', 'paid', 'refunded') DEFAULT 'pending',
    special_requests TEXT,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    cancelled_at TIMESTAMP NULL,
    cancellation_reason TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_room_id (room_id),
    INDEX idx_check_in (check_in),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Reviews Table
-- ===========================
CREATE TABLE IF NOT EXISTS reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    booking_id INT,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title VARCHAR(200),
    comment TEXT,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id) ON DELETE CASCADE,
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id) ON DELETE SET NULL,
    INDEX idx_room_id (room_id),
    INDEX idx_rating (rating),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Payments Table
-- ===========================
CREATE TABLE IF NOT EXISTS payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method ENUM('credit_card', 'debit_card', 'paypal', 'bank_transfer', 'cash') NOT NULL,
    transaction_id VARCHAR(255),
    status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id) ON DELETE CASCADE,
    INDEX idx_booking_id (booking_id),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Amenities Table
-- ===========================
CREATE TABLE IF NOT EXISTS amenities (
    amenity_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    category VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Wishlist Table
-- ===========================
CREATE TABLE IF NOT EXISTS wishlist (
    wishlist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id) ON DELETE CASCADE,
    UNIQUE KEY unique_wishlist (user_id, room_id),
    INDEX idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Contact Messages Table
-- ===========================
CREATE TABLE IF NOT EXISTS contact_messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    replied_at TIMESTAMP NULL,
    INDEX idx_status (status),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===========================
-- Insert Demo Data
-- ===========================

-- Insert Admin User
INSERT INTO users (email, password, first_name, last_name, phone, role, status) VALUES
('admin@luxepalace.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', 'LUXE PALACE', '+33123456789', 'admin', 'active'),
('demo@client.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Jean', 'Dupont', '+33612345678', 'guest', 'active');
-- Password for both: 'password123'

-- Insert Rooms
INSERT INTO rooms (room_number, name, type, capacity, price_per_night, size, description, image_url, status, floor) VALUES
('101', 'Chambre Standard', 'standard', 2, 120.00, '28m²', 'Confort essentiel avec notre signature de qualité', 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800', 'available', 1),
('102', 'Chambre Supérieure', 'standard', 2, 160.00, '32m²', 'Plus d''espace et de confort pour votre séjour', 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800', 'available', 1),
('201', 'Chambre Executive', 'deluxe', 2, 180.00, '35m²', 'Élégance et fonctionnalité pour les voyageurs d''affaires', 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800', 'available', 2),
('202', 'Suite Deluxe', 'deluxe', 2, 250.00, '45m²', 'Une chambre spacieuse avec vue panoramique sur la ville', 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800', 'available', 2),
('301', 'Junior Suite', 'suite', 2, 320.00, '55m²', 'Espace généreux avec coin salon séparé', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800', 'available', 3),
('302', 'Suite Familiale', 'suite', 4, 450.00, '75m²', 'Parfaite pour les familles avec deux chambres séparées', 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800', 'available', 3),
('401', 'Suite Présidentielle', 'suite', 4, 850.00, '120m²', 'Luxe absolu avec terrasse privée et service de majordome', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', 'available', 4),
('501', 'Penthouse', 'suite', 6, 1200.00, '200m²', 'Notre suite la plus exclusive avec vue à 360°', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', 'available', 5);

-- Insert Room Features
INSERT INTO room_features (room_id, feature_name, icon) VALUES
(1, 'Queen Size', 'fa-bed'),
(1, 'Wi-Fi', 'fa-wifi'),
(1, 'TV', 'fa-tv'),
(1, 'Climatisation', 'fa-wind'),
(2, 'King Size', 'fa-bed'),
(2, 'Wi-Fi', 'fa-wifi'),
(2, 'Vue jardin', 'fa-tree'),
(2, 'Minibar', 'fa-glass-martini'),
(3, 'Queen Size', 'fa-bed'),
(3, 'Bureau', 'fa-briefcase'),
(3, 'Wi-Fi', 'fa-wifi'),
(3, 'Coffre-fort', 'fa-lock'),
(4, 'King Size', 'fa-bed'),
(4, 'Wi-Fi', 'fa-wifi'),
(4, 'Balcon', 'fa-building'),
(4, 'Minibar', 'fa-glass-martini'),
(5, 'King Size', 'fa-bed'),
(5, 'Salon', 'fa-couch'),
(5, 'Baignoire', 'fa-bath'),
(5, 'Vue mer', 'fa-water'),
(6, '2 Chambres', 'fa-door-open'),
(6, 'Kitchenette', 'fa-utensils'),
(6, 'Balcon', 'fa-building'),
(6, 'Wi-Fi', 'fa-wifi'),
(7, '2 King Size', 'fa-bed'),
(7, 'Jacuzzi', 'fa-hot-tub'),
(7, 'Terrasse', 'fa-umbrella-beach'),
(7, 'Majordome', 'fa-concierge-bell'),
(8, '3 Chambres', 'fa-door-open'),
(8, 'Terrasse 360°', 'fa-building'),
(8, 'Spa privé', 'fa-spa'),
(8, 'Piano', 'fa-music');

-- Insert Amenities
INSERT INTO amenities (name, description, icon, category, is_active) VALUES
('Spa & Bien-être', 'Détendez-vous dans notre spa 5 étoiles', 'fa-spa', 'wellness', TRUE),
('Restaurant Gastronomique', 'Cuisine raffinée par nos chefs étoilés', 'fa-utensils', 'dining', TRUE),
('Piscine Infinity', 'Vue panoramique spectaculaire', 'fa-swimming-pool', 'recreation', TRUE),
('Fitness Center', 'Équipements de dernière génération', 'fa-dumbbell', 'fitness', TRUE),
('Conciergerie 24/7', 'À votre service à tout moment', 'fa-concierge-bell', 'service', TRUE),
('Service Voiturier', 'Parking sécurisé inclus', 'fa-car', 'service', TRUE),
('Salle de Conférence', 'Équipements professionnels', 'fa-presentation', 'business', TRUE),
('Bar Lounge', 'Cocktails signature', 'fa-cocktail', 'dining', TRUE);

-- Insert Demo Bookings
INSERT INTO bookings (user_id, room_id, check_in, check_out, guests, total_price, status, payment_status) VALUES
(2, 4, '2024-02-15', '2024-02-18', 2, 750.00, 'confirmed', 'paid'),
(2, 7, '2024-03-01', '2024-03-03', 2, 1700.00, 'pending', 'pending');

-- Insert Demo Reviews
INSERT INTO reviews (user_id, room_id, booking_id, rating, title, comment, status) VALUES
(2, 4, 1, 5, 'Expérience exceptionnelle', 'Une expérience absolument exceptionnelle ! Le service est impeccable et les chambres sont d''un luxe rare.', 'approved');

-- ===========================
-- Views for Analytics
-- ===========================

-- Room Occupancy View
CREATE OR REPLACE VIEW room_occupancy_stats AS
SELECT 
    r.room_id,
    r.room_number,
    r.name,
    r.type,
    COUNT(b.booking_id) as total_bookings,
    SUM(CASE WHEN b.status = 'confirmed' THEN 1 ELSE 0 END) as confirmed_bookings,
    SUM(b.total_price) as total_revenue
FROM rooms r
LEFT JOIN bookings b ON r.room_id = b.room_id
GROUP BY r.room_id;

-- Monthly Revenue View
CREATE OR REPLACE VIEW monthly_revenue AS
SELECT 
    DATE_FORMAT(booking_date, '%Y-%m') as month,
    COUNT(booking_id) as total_bookings,
    SUM(total_price) as total_revenue,
    AVG(total_price) as avg_booking_value
FROM bookings
WHERE status IN ('confirmed', 'checked_in', 'checked_out')
GROUP BY DATE_FORMAT(booking_date, '%Y-%m')
ORDER BY month DESC;

-- User Statistics View
CREATE OR REPLACE VIEW user_stats AS
SELECT 
    u.user_id,
    u.first_name,
    u.last_name,
    u.email,
    COUNT(b.booking_id) as total_bookings,
    SUM(b.total_price) as total_spent,
    MAX(b.booking_date) as last_booking_date
FROM users u
LEFT JOIN bookings b ON u.user_id = b.user_id
WHERE u.role = 'guest'
GROUP BY u.user_id;

-- ===========================
-- Triggers
-- ===========================

-- Update room status when booking is confirmed
DELIMITER //
CREATE TRIGGER update_room_status_after_booking
AFTER INSERT ON bookings
FOR EACH ROW
BEGIN
    IF NEW.status = 'confirmed' THEN
        UPDATE rooms 
        SET status = 'reserved' 
        WHERE room_id = NEW.room_id;
    END IF;
END//

-- Update room status when booking is cancelled
CREATE TRIGGER update_room_status_after_cancel
AFTER UPDATE ON bookings
FOR EACH ROW
BEGIN
    IF NEW.status = 'cancelled' AND OLD.status != 'cancelled' THEN
        UPDATE rooms 
        SET status = 'available' 
        WHERE room_id = NEW.room_id;
    END IF;
END//

DELIMITER ;

-- ===========================
-- Stored Procedures
-- ===========================

-- Check Room Availability
DELIMITER //
CREATE PROCEDURE CheckRoomAvailability(
    IN p_room_id INT,
    IN p_check_in DATE,
    IN p_check_out DATE
)
BEGIN
    SELECT COUNT(*) as conflicts
    FROM bookings
    WHERE room_id = p_room_id
    AND status IN ('confirmed', 'checked_in')
    AND (
        (check_in <= p_check_in AND check_out > p_check_in)
        OR (check_in < p_check_out AND check_out >= p_check_out)
        OR (check_in >= p_check_in AND check_out <= p_check_out)
    );
END//

-- Get Available Rooms
CREATE PROCEDURE GetAvailableRooms(
    IN p_check_in DATE,
    IN p_check_out DATE,
    IN p_guests INT
)
BEGIN
    SELECT r.*
    FROM rooms r
    WHERE r.capacity >= p_guests
    AND r.room_id NOT IN (
        SELECT room_id
        FROM bookings
        WHERE status IN ('confirmed', 'checked_in')
        AND (
            (check_in <= p_check_in AND check_out > p_check_in)
            OR (check_in < p_check_out AND check_out >= p_check_out)
            OR (check_in >= p_check_in AND check_out <= p_check_out)
        )
    )
    ORDER BY r.price_per_night;
END//

DELIMITER ;

-- ===========================
-- Indexes for Performance
-- ===========================

CREATE INDEX idx_booking_dates ON bookings(check_in, check_out);
CREATE INDEX idx_room_price ON rooms(price_per_night);
CREATE INDEX idx_user_created ON users(created_at);

-- ===========================
-- Grant Privileges
-- ===========================

-- Create application user (change password in production)
CREATE USER IF NOT EXISTS 'luxepalace_app'@'localhost' IDENTIFIED BY 'LuxePalace2024!';
GRANT SELECT, INSERT, UPDATE, DELETE ON luxe_palace.* TO 'luxepalace_app'@'localhost';
FLUSH PRIVILEGES;
