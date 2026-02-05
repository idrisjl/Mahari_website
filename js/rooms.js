// ===========================
// Rooms Data & Management
// ===========================

const roomsDatabase = [
    {
        id: 'deluxe',
        name: 'Suite Deluxe',
        type: 'deluxe',
        capacity: 2,
        price: 250,
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
        description: 'Une chambre spacieuse avec vue panoramique sur la ville',
        features: ['King Size', 'Wi-Fi', 'Balcon', 'Minibar', 'TV 4K'],
        size: '45m²',
        badge: 'Populaire',
        badgeClass: ''
    },
    {
        id: 'presidential',
        name: 'Suite Présidentielle',
        type: 'suite',
        capacity: 4,
        price: 850,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
        description: 'Luxe absolu avec terrasse privée et service de majordome',
        features: ['2 King Size', 'Jacuzzi', 'Terrasse', 'Majordome', 'Salon'],
        size: '120m²',
        badge: 'Premium',
        badgeClass: 'premium'
    },
    {
        id: 'executive',
        name: 'Chambre Executive',
        type: 'deluxe',
        capacity: 2,
        price: 180,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
        description: 'Élégance et fonctionnalité pour les voyageurs d\'affaires',
        features: ['Queen Size', 'Bureau', 'Wi-Fi', 'Coffre-fort', 'Minibar'],
        size: '35m²',
        badge: 'Nouveau',
        badgeClass: ''
    },
    {
        id: 'junior-suite',
        name: 'Junior Suite',
        type: 'suite',
        capacity: 2,
        price: 320,
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
        description: 'Espace généreux avec coin salon séparé',
        features: ['King Size', 'Salon', 'Baignoire', 'Vue mer', 'Minibar'],
        size: '55m²',
        badge: null,
        badgeClass: ''
    },
    {
        id: 'family-suite',
        name: 'Suite Familiale',
        type: 'suite',
        capacity: 4,
        price: 450,
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
        description: 'Parfaite pour les familles avec deux chambres séparées',
        features: ['2 Chambres', 'Kitchenette', 'Balcon', 'Jouets', 'Wi-Fi'],
        size: '75m²',
        badge: 'Famille',
        badgeClass: ''
    },
    {
        id: 'penthouse',
        name: 'Penthouse',
        type: 'suite',
        capacity: 6,
        price: 1200,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
        description: 'Notre suite la plus exclusive avec vue à 360°',
        features: ['3 Chambres', 'Terrasse 360°', 'Spa privé', 'Majordome', 'Piano'],
        size: '200m²',
        badge: 'Exclusif',
        badgeClass: 'premium'
    },
    {
        id: 'standard',
        name: 'Chambre Standard',
        type: 'standard',
        capacity: 2,
        price: 120,
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
        description: 'Confort essentiel avec notre signature de qualité',
        features: ['Queen Size', 'Wi-Fi', 'TV', 'Salle de bain', 'Climatisation'],
        size: '28m²',
        badge: null,
        badgeClass: ''
    },
    {
        id: 'superior',
        name: 'Chambre Supérieure',
        type: 'standard',
        capacity: 2,
        price: 160,
        image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800',
        description: 'Plus d\'espace et de confort pour votre séjour',
        features: ['King Size', 'Vue jardin', 'Wi-Fi', 'Minibar', 'Bureau'],
        size: '32m²',
        badge: null,
        badgeClass: ''
    }
];

// Render rooms
function renderRooms(rooms = roomsDatabase) {
    const grid = document.getElementById('roomsGrid');
    
    if (!grid) return;
    
    if (rooms.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 48px; color: var(--text-gray); margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-gray);">Aucune chambre trouvée</h3>
                <p style="color: var(--text-gray);">Essayez de modifier vos filtres</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = rooms.map(room => `
        <div class="room-card" data-capacity="${room.capacity}" data-price="${room.price}" data-type="${room.type}">
            <div class="room-image">
                <img src="${room.image}" alt="${room.name}">
                ${room.badge ? `<div class="room-badge ${room.badgeClass}">${room.badge}</div>` : ''}
                <button class="wishlist-btn" onclick="toggleWishlist('${room.id}')" title="Ajouter aux favoris">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="room-details">
                <h3>${room.name}</h3>
                <p>${room.description}</p>
                <div class="room-info">
                    <span><i class="fas fa-expand-arrows-alt"></i> ${room.size}</span>
                    <span><i class="fas fa-user"></i> ${room.capacity} ${room.capacity > 1 ? 'Personnes' : 'Personne'}</span>
                </div>
                <div class="room-features">
                    ${room.features.slice(0, 3).map(feature => `
                        <span><i class="fas fa-check"></i> ${feature}</span>
                    `).join('')}
                </div>
                <div class="room-footer">
                    <div class="price">
                        <span class="from">À partir de</span>
                        <span class="amount">${room.price}€</span>
                        <span class="per-night">/nuit</span>
                    </div>
                    <a href="room-details.html?room=${room.id}" class="btn-secondary">Voir Détails</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add animation
    setTimeout(() => {
        document.querySelectorAll('.room-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
    
    // Update wishlist buttons
    updateWishlistButtons();
}

// Apply filters
function applyFilters() {
    const capacityFilter = document.getElementById('filterCapacity').value;
    const priceFilter = document.getElementById('filterPrice').value;
    const typeFilter = document.getElementById('filterType').value;
    
    let filtered = roomsDatabase;
    
    // Capacity filter
    if (capacityFilter !== 'all') {
        const capacity = parseInt(capacityFilter);
        filtered = filtered.filter(room => {
            if (capacityFilter === '6') {
                return room.capacity >= 6;
            }
            return room.capacity === capacity;
        });
    }
    
    // Price filter
    if (priceFilter !== 'all') {
        filtered = filtered.filter(room => {
            if (priceFilter === '0-200') {
                return room.price >= 0 && room.price <= 200;
            } else if (priceFilter === '200-500') {
                return room.price > 200 && room.price <= 500;
            } else if (priceFilter === '500+') {
                return room.price > 500;
            }
            return true;
        });
    }
    
    // Type filter
    if (typeFilter !== 'all') {
        filtered = filtered.filter(room => room.type === typeFilter);
    }
    
    renderRooms(filtered);
}

// Wishlist functionality
function toggleWishlist(roomId) {
    const isInWishlist = WishlistManager.toggle(roomId);
    updateWishlistButtons();
}

function updateWishlistButtons() {
    const wishlist = WishlistManager.getAll();
    
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const card = btn.closest('.room-card');
        if (!card) return;
        
        // Get room ID from the details link
        const detailsLink = card.querySelector('a[href*="room="]');
        if (!detailsLink) return;
        
        const roomId = detailsLink.href.split('room=')[1];
        const icon = btn.querySelector('i');
        
        if (wishlist.includes(roomId)) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            btn.style.color = 'var(--primary-gold)';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            btn.style.color = '';
        }
    });
}

// Check URL parameters for search
function checkSearchParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const checkin = urlParams.get('checkin');
    const checkout = urlParams.get('checkout');
    const guests = urlParams.get('guests');
    
    if (checkin && checkout && guests) {
        console.log('Recherche avec:', { checkin, checkout, guests });
        // You can add logic here to filter by availability
    }
}

// Add wishlist button styles
const style = document.createElement('style');
style.textContent = `
    .wishlist-btn {
        position: absolute;
        top: 15px;
        left: 15px;
        background: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 10;
    }
    
    .wishlist-btn:hover {
        transform: scale(1.1);
    }
    
    .wishlist-btn i {
        font-size: 18px;
        color: var(--text-dark);
    }
    
    .room-info {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
        color: var(--text-gray);
        font-size: 14px;
    }
    
    .room-info span {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    
    .room-info i {
        color: var(--primary-gold);
    }
    
    .room-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
`;
document.head.appendChild(style);

// Initialize
if (document.getElementById('roomsGrid')) {
    renderRooms();
    checkSearchParams();
}
