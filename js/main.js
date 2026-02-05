// ===========================
// LUXE PALACE - Main JavaScript
// ===========================

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : 'none';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => span.style.transform = 'none');
        spans[1].style.opacity = '1';
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Quick Booking Form Validation
const quickBookingForm = document.getElementById('quickBookingForm');

if (quickBookingForm) {
    quickBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guests = document.getElementById('guests').value;
        
        // Validate dates
        if (!checkin || !checkout) {
            showNotification('Veuillez sélectionner les dates d\'arrivée et de départ', 'error');
            return;
        }
        
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (checkinDate < today) {
            showNotification('La date d\'arrivée ne peut pas être dans le passé', 'error');
            return;
        }
        
        if (checkoutDate <= checkinDate) {
            showNotification('La date de départ doit être après la date d\'arrivée', 'error');
            return;
        }
        
        // Redirect to rooms page with search params
        window.location.href = `rooms.html?checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
    });
}

// Set minimum date for booking inputs
const today = new Date().toISOString().split('T')[0];
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

if (checkinInput) {
    checkinInput.setAttribute('min', today);
    checkinInput.addEventListener('change', () => {
        const checkinDate = new Date(checkinInput.value);
        const nextDay = new Date(checkinDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkoutInput.setAttribute('min', nextDay.toISOString().split('T')[0]);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#e74c3c' : '#27ae60'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.room-card, .amenity-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.room-card, .amenity-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Local Storage for user preferences
const userPreferences = {
    save: function(key, value) {
        localStorage.setItem(`luxe_palace_${key}`, JSON.stringify(value));
    },
    
    get: function(key) {
        const item = localStorage.getItem(`luxe_palace_${key}`);
        return item ? JSON.parse(item) : null;
    },
    
    remove: function(key) {
        localStorage.removeItem(`luxe_palace_${key}`);
    }
};

// Booking data storage
const BookingManager = {
    saveBooking: function(bookingData) {
        const bookings = this.getAllBookings();
        bookingData.id = Date.now();
        bookingData.date = new Date().toISOString();
        bookings.push(bookingData);
        userPreferences.save('bookings', bookings);
        return bookingData.id;
    },
    
    getAllBookings: function() {
        return userPreferences.get('bookings') || [];
    },
    
    getBooking: function(id) {
        const bookings = this.getAllBookings();
        return bookings.find(b => b.id === id);
    },
    
    deleteBooking: function(id) {
        const bookings = this.getAllBookings();
        const filtered = bookings.filter(b => b.id !== id);
        userPreferences.save('bookings', filtered);
    }
};

// Wishlist functionality
const WishlistManager = {
    add: function(roomId) {
        const wishlist = this.getAll();
        if (!wishlist.includes(roomId)) {
            wishlist.push(roomId);
            userPreferences.save('wishlist', wishlist);
            showNotification('Ajouté aux favoris', 'success');
            return true;
        }
        return false;
    },
    
    remove: function(roomId) {
        const wishlist = this.getAll();
        const filtered = wishlist.filter(id => id !== roomId);
        userPreferences.save('wishlist', filtered);
        showNotification('Retiré des favoris', 'info');
    },
    
    getAll: function() {
        return userPreferences.get('wishlist') || [];
    },
    
    isInWishlist: function(roomId) {
        return this.getAll().includes(roomId);
    },
    
    toggle: function(roomId) {
        if (this.isInWishlist(roomId)) {
            this.remove(roomId);
            return false;
        } else {
            this.add(roomId);
            return true;
        }
    }
};

// Currency formatter
function formatCurrency(amount, currency = 'EUR') {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Date formatter
function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
}

// Calculate nights between dates
function calculateNights(checkin, checkout) {
    const start = new Date(checkin);
    const end = new Date(checkout);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification,
        userPreferences,
        BookingManager,
        WishlistManager,
        formatCurrency,
        formatDate,
        calculateNights
    };
}

console.log('🏨 LUXE PALACE - Système initialisé');
