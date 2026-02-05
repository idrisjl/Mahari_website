// ===========================
// Authentication System
// ===========================

// Demo users database
const users = {
    guests: [
        {
            email: 'demo@client.com',
            password: 'client123',
            name: 'Jean Dupont',
            role: 'guest'
        }
    ],
    admins: [
        {
            email: 'admin@luxepalace.com',
            password: 'admin123',
            name: 'Administrateur',
            role: 'admin'
        }
    ]
};

// Tab switching
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    if (tabName === 'guest') {
        document.getElementById('guestTab').classList.add('active');
        document.querySelector('.tab-btn:first-child').classList.add('active');
    } else {
        document.getElementById('adminTab').classList.add('active');
        document.querySelector('.tab-btn:last-child').classList.add('active');
    }
}

// Guest Login
const guestLoginForm = document.getElementById('guestLoginForm');
if (guestLoginForm) {
    guestLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('guestEmail').value;
        const password = document.getElementById('guestPassword').value;
        
        // Check credentials
        const user = users.guests.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Save session
            sessionStorage.setItem('user', JSON.stringify(user));
            showNotification('Connexion réussie ! Redirection...', 'success');
            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        } else {
            showNotification('Email ou mot de passe incorrect', 'error');
        }
    });
}

// Admin Login
const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;
        
        // Check credentials
        const admin = users.admins.find(u => u.email === email && u.password === password);
        
        if (admin) {
            // Save session
            sessionStorage.setItem('user', JSON.stringify(admin));
            showNotification('Accès autorisé ! Redirection...', 'success');
            
            setTimeout(() => {
                window.location.href = 'admin-dashboard.html';
            }, 1500);
        } else {
            showNotification('Accès refusé : Identifiants invalides', 'error');
        }
    });
}

// Check if user is logged in
function isLoggedIn() {
    return sessionStorage.getItem('user') !== null;
}

// Get current user
function getCurrentUser() {
    const userStr = sessionStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

// Logout
function logout() {
    sessionStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Protect pages (call this on protected pages)
function requireAuth(requiredRole = null) {
    const user = getCurrentUser();
    
    if (!user) {
        window.location.href = 'login.html';
        return false;
    }
    
    if (requiredRole && user.role !== requiredRole) {
        window.location.href = 'index.html';
        return false;
    }
    
    return true;
}

// Update navigation based on auth status
function updateNavigation() {
    const user = getCurrentUser();
    const loginBtn = document.querySelector('.btn-login');
    
    if (user && loginBtn) {
        loginBtn.textContent = user.name;
        loginBtn.href = user.role === 'admin' ? 'admin-dashboard.html' : 'dashboard.html';
        
        // Add logout button
        const logoutBtn = document.createElement('a');
        logoutBtn.href = '#';
        logoutBtn.className = 'btn-login';
        logoutBtn.style.marginLeft = '10px';
        logoutBtn.textContent = 'Déconnexion';
        logoutBtn.onclick = (e) => {
            e.preventDefault();
            logout();
        };
        
        loginBtn.parentNode.appendChild(logoutBtn);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isLoggedIn,
        getCurrentUser,
        logout,
        requireAuth
    };
}
