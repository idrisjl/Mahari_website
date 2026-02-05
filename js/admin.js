// ===========================
// Admin Dashboard Functionality
// ===========================

// Protect admin pages
if (window.location.pathname.includes('admin-dashboard')) {
    requireAuth('admin');
}

// Display admin name
const adminName = document.getElementById('adminName');
if (adminName) {
    const user = getCurrentUser();
    if (user) {
        adminName.textContent = user.name;
    }
}

// Sidebar navigation
const navItems = document.querySelectorAll('.nav-item[data-section]');
const contentSections = document.querySelectorAll('.content-section');
const pageTitle = document.getElementById('pageTitle');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const sectionId = item.getAttribute('data-section');
        
        // Update active states
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Show selected section
        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
        
        // Update page title
        const titles = {
            'dashboard': 'Tableau de Bord',
            'bookings': 'Gestion des Réservations',
            'rooms': 'Gestion des Chambres',
            'guests': 'Base de Données Clients',
            'analytics': 'Rapports et Analytiques',
            'reviews': 'Gestion des Avis',
            'settings': 'Paramètres du Système'
        };
        
        if (pageTitle) {
            pageTitle.textContent = titles[sectionId] || 'Tableau de Bord';
        }
        
        // Close mobile sidebar if open
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('adminSidebar');
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        }
    });
});

// Mobile sidebar toggle
const mobileToggle = document.getElementById('mobileToggle');
const adminSidebar = document.getElementById('adminSidebar');

if (mobileToggle && adminSidebar) {
    mobileToggle.addEventListener('click', () => {
        adminSidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (adminSidebar && 
            !adminSidebar.contains(e.target) && 
            !mobileToggle.contains(e.target) &&
            adminSidebar.classList.contains('active')) {
            adminSidebar.classList.remove('active');
        }
    }
});

// Mock bookings data
const bookingsData = [
    {
        id: '#12345',
        client: 'Marie Dubois',
        room: 'Suite Deluxe',
        checkin: '15/02/2024',
        checkout: '18/02/2024',
        amount: '€750',
        status: 'confirmed'
    },
    {
        id: '#12346',
        client: 'Pierre Martin',
        room: 'Suite Présidentielle',
        checkin: '20/02/2024',
        checkout: '22/02/2024',
        amount: '€1,700',
        status: 'pending'
    },
    {
        id: '#12347',
        client: 'Sophie Laurent',
        room: 'Chambre Executive',
        checkin: '10/02/2024',
        checkout: '15/02/2024',
        amount: '€900',
        status: 'confirmed'
    },
    {
        id: '#12348',
        client: 'Lucas Bernard',
        room: 'Junior Suite',
        checkin: '25/02/2024',
        checkout: '28/02/2024',
        amount: '€960',
        status: 'confirmed'
    },
    {
        id: '#12349',
        client: 'Emma Rousseau',
        room: 'Suite Familiale',
        checkin: '05/03/2024',
        checkout: '08/03/2024',
        amount: '€1,350',
        status: 'pending'
    }
];

// Render bookings table
function renderBookingsTable(bookings = bookingsData) {
    const table = document.getElementById('bookingsTable');
    
    if (!table) return;
    
    const statusBadges = {
        'confirmed': '<span class="badge-success">Confirmé</span>',
        'pending': '<span class="badge-warning">En Attente</span>',
        'cancelled': '<span class="badge-danger">Annulé</span>'
    };
    
    table.innerHTML = bookings.map(booking => `
        <tr>
            <td>${booking.id}</td>
            <td>${booking.client}</td>
            <td>${booking.room}</td>
            <td>${booking.checkin}</td>
            <td>${booking.checkout}</td>
            <td>${booking.amount}</td>
            <td>${statusBadges[booking.status]}</td>
            <td>
                <button class="btn-icon" title="Voir" onclick="viewBooking('${booking.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" title="Modifier" onclick="editBooking('${booking.id}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon danger" title="Annuler" onclick="cancelBooking('${booking.id}')">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Booking actions
function viewBooking(id) {
    showNotification(`Affichage des détails de la réservation ${id}`, 'info');
}

function editBooking(id) {
    showNotification(`Modification de la réservation ${id}`, 'info');
}

function cancelBooking(id) {
    if (confirm('Êtes-vous sûr de vouloir annuler cette réservation ?')) {
        showNotification(`Réservation ${id} annulée`, 'success');
        // Update data and re-render
        const index = bookingsData.findIndex(b => b.id === id);
        if (index !== -1) {
            bookingsData[index].status = 'cancelled';
            renderBookingsTable();
        }
    }
}

// Search functionality
const searchBox = document.querySelector('.search-box input');
if (searchBox) {
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = bookingsData.filter(booking => 
            booking.client.toLowerCase().includes(searchTerm) ||
            booking.room.toLowerCase().includes(searchTerm) ||
            booking.id.toLowerCase().includes(searchTerm)
        );
        renderBookingsTable(filtered);
    });
}

// Filter functionality
const filterSelect = document.querySelector('.filter-select');
if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
        const status = e.target.value.toLowerCase();
        
        if (status === 'tous les statuts') {
            renderBookingsTable();
            return;
        }
        
        const statusMap = {
            'confirmé': 'confirmed',
            'en attente': 'pending',
            'annulé': 'cancelled'
        };
        
        const filtered = bookingsData.filter(booking => 
            booking.status === statusMap[status]
        );
        renderBookingsTable(filtered);
    });
}

// Animate stats on load
function animateStats() {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Set initial state for stats
document.querySelectorAll('.stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

// Real-time clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const clockElement = document.getElementById('adminClock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// Dashboard statistics calculator
const DashboardStats = {
    calculateOccupancyRate: function() {
        // Mock calculation
        const totalRooms = 50;
        const occupiedRooms = 39;
        return Math.round((occupiedRooms / totalRooms) * 100);
    },
    
    calculateRevenue: function() {
        // Mock calculation
        return bookingsData
            .filter(b => b.status === 'confirmed')
            .reduce((sum, b) => sum + parseInt(b.amount.replace(/[€,]/g, '')), 0);
    },
    
    calculateAverageRating: function() {
        // Mock calculation
        return 4.8;
    },
    
    getActiveBookings: function() {
        return bookingsData.filter(b => b.status === 'confirmed').length;
    }
};

// Export report functionality
function exportReport(type) {
    showNotification(`Export du rapport ${type} en cours...`, 'info');
    
    setTimeout(() => {
        showNotification(`Rapport ${type} exporté avec succès !`, 'success');
    }, 1500);
}

// Notification system for admin
function showAdminNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `admin-notification admin-notification-${type}`;
    notification.innerHTML = `
        <div class="admin-notification-header">
            <strong>${title}</strong>
            <button onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <p>${message}</p>
    `;
    
    const style = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        max-width: 350px;
        z-index: 10000;
        border-left: 4px solid ${type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#3498db'};
        animation: slideInRight 0.3s ease;
    `;
    
    notification.style.cssText = style;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Initialize dashboard
window.addEventListener('DOMContentLoaded', () => {
    // Render initial data
    renderBookingsTable();
    
    // Animate stats
    setTimeout(animateStats, 100);
    
    // Start clock
    updateClock();
    setInterval(updateClock, 60000);
    
    console.log('🎯 Admin Dashboard initialisé');
});

// Quick actions
function quickAction(action) {
    const actions = {
        'new-booking': 'Nouvelle réservation',
        'check-in': 'Enregistrement client',
        'check-out': 'Départ client',
        'maintenance': 'Signaler maintenance'
    };
    
    showAdminNotification('Action Rapide', `${actions[action]} en cours...`, 'info');
}

// Real-time updates simulation
let updateInterval;

function startRealtimeUpdates() {
    updateInterval = setInterval(() => {
        // Simulate new booking notification
        if (Math.random() > 0.95) {
            showAdminNotification(
                'Nouvelle Réservation',
                'Une nouvelle réservation vient d\'être effectuée',
                'success'
            );
        }
    }, 10000);
}

// Stop updates when leaving page
window.addEventListener('beforeunload', () => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});

// Start real-time updates
// startRealtimeUpdates(); // Uncomment to enable

console.log('✅ Admin JavaScript chargé');
