# 🏝️ Iberostar Waves Mehari Djerba - Système de Gestion Hôtelière

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Tunisia](https://img.shields.io/badge/Tunisia-%E2%9D%A4%EF%B8%8F-red?style=for-the-badge)](https://fr.wikipedia.org/wiki/Djerba)

**Système complet de réservation et de gestion pour l'hôtel Iberostar Waves Mehari Djerba - Complexe 4 étoiles face à la mer**

![Iberostar Waves Mehari Djerba Banner](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=400&fit=crop)

---

## 📋 Table des Matières
- [🏖️ À Propos de l'Hôtel](#à-propos-de-lhôtel)
- [✨ Fonctionnalités](#fonctionnalités)
- [🛠️ Technologies](#technologies)
- [📁 Structure du Projet](#structure-du-projet)
- [🚀 Installation](#installation)
- [🔧 Configuration](#configuration)
- [💻 Utilisation](#utilisation)
- [📊 Dashboard Admin](#dashboard-admin)
- [📡 API Documentation](#api-documentation)
- [🔒 Sécurité](#sécurité)
- [🤝 Contribuer](#contribuer)
- [📞 Contact](#contact)

---

## 🏖️ À Propos de l'Hôtel

**Iberostar Waves Mehari Djerba** est un complexe hôtelier 4 étoiles situé sur la magnifique plage de Sidi Mehrez à Djerba, Tunisie. Notre établissement offre:

- ✅ **300 chambres** face à la mer
- ✅ **Plage privée** de sable fin
- ✅ **3 piscines** extérieures
- ✅ **4 restaurants** et 3 bars
- ✅ **Spa & centre de bien-être**
- ✅ **Club enfants** et animations
- ✅ **Formule tout compris**

**Localisation**: Zone Touristique Sidi Mehrez, Djerba 4116, Tunisie  
**Téléphone**: +216 75 650 000  
**Email**: waves.mehari.djerba@iberostar.com

---

## ✨ Fonctionnalités

### 🌐 Frontend Client
- ✅ **Page d'accueil** avec vue mer et booking rapide
- ✅ **Galerie des chambres** (Standard, Deluxe, Familiale, Premium)
- ✅ **Système de réservation** tout compris
- ✅ **Authentification** client multi-niveaux
- ✅ **Espace personnel** avec historiques
- ✅ **Page expériences** (Spa, Restaurants, Animation, Excursions)
- ✅ **À propos** avec notre équipe tunisienne
- ✅ **Formulaire de contact** et informations pratiques
- ✅ **Design responsive** mobile-first
- ✅ **Support multi-langue** (Français/Anglais/Arabe)

### 🏢 Backend Professionnel
- ✅ **Dashboard administrateur** complet
- ✅ **Gestion des réservations** en temps réel
- ✅ **Gestion des chambres** (300+ chambres)
- ✅ **Base de données clients** internationale
- ✅ **Rapports analytiques** (occupation, revenus, nationalités)
- ✅ **Gestion du personnel** avec accès dédié
- ✅ **Système de saisonnalité** (haute/basse saison)
- ✅ **Gestion des avis** et modération

### 🔌 API & Base de Données
- ✅ **API RESTful** complète avec documentation
- ✅ **Base de données MySQL** optimisée
- ✅ **Calcul automatique** des prix avec taxes tunisiennes
- ✅ **Gestion de disponibilité** en temps réel
- ✅ **Système de facturation** professionnel
- ✅ **Export PDF** des réservations

### 🎯 Spécificités Djerba
- ✅ **Tarifs adaptés** au marché tunisien (€ et TND)
- ✅ **Gestion des nationalités** (France, Allemagne, Espagne, etc.)
- ✅ **Système d'excursions** (Djerba, Sahara)
- ✅ **Support multi-devises**
- ✅ **Informations locales** (météo, transports, culture)

---

## 🛠️ Technologies

### Frontend
- **HTML5** - Structure sémantique moderne
- **CSS3** - Grid, Flexbox, Variables CSS, Animations
- **JavaScript ES6+** - Modules, Promises, Async/Await
- **Font Awesome 6** - Bibliothèque d'icônes
- **Google Fonts** - Typographie élégante
- **Responsive Design** - Mobile, Tablet, Desktop

### Backend
- **PHP 7.4+** - Backend robuste et sécurisé
- **MySQL 8.0+** - Base de données performante
- **PDO** - Requêtes préparées sécurisées
- **Sessions PHP** - Authentification multi-niveaux
- **API RESTful** - Architecture modulaire

### Infrastructure
- **Apache 2.4+** avec mod_rewrite
- **Composer** (optionnel) - Gestion des dépendances
- **Git** - Contrôle de version
- **XAMPP/MAMP/WAMP** - Environnements de développement

---

## 📁 Structure du Projet

```
iberostar-djerba/
│
├── 📄 Pages HTML
│   ├── index.html                  # Page d'accueil avec vue mer
│   ├── rooms.html                  # Chambres et suites
│   ├── experiences.html            # Restaurants, Spa, Animation
│   ├── about.html                  # Notre équipe et histoire
│   ├── contact.html                # Contact et informations
│   ├── login.html                  # Connexion (Client/Admin/Staff)
│   ├── admin-dashboard.html        # Dashboard administration
│   ├── booking.html                # Processus de réservation
│   └── 404.html                    # Page d'erreur personnalisée
│
├── 🎨 Styles
│   ├── css/
│   │   ├── style.css              # Styles principaux (thème bleu Iberostar)
│   │   ├── admin.css              # Styles dashboard admin
│   │   └── responsive.css         # Responsive design
│
├── ⚡ JavaScript
│   ├── js/
│   │   ├── main.js                # Fonctions principales
│   │   ├── rooms.js               # Gestion des chambres
│   │   ├── auth.js                # Système d'authentification
│   │   ├── admin.js               # Logique dashboard admin
│   │   ├── booking.js             # Processus de réservation
│   │   └── contact.js             # Formulaire de contact
│
├── 🔌 API PHP
│   ├── api/
│   │   ├── auth.php               # Authentification multi-niveaux
│   │   ├── rooms.php              # Gestion des chambres
│   │   ├── bookings.php           # Réservations et disponibilité
│   │   ├── guests.php             # Gestion clients
│   │   └── contact.php            # Messages de contact
│
├── ⚙️ Configuration
│   ├── config.php                  # Configuration centrale
│   ├── database.sql                # Schéma de base de données
│   └── .htaccess                   # Configuration Apache
│
├── 📊 Base de Données
│   ├── schema/                     # Schémas SQL
│   ├── data/                       # Données de démo
│   └── backups/                    # Scripts de sauvegarde
│
└── 📚 Documentation
    ├── README.md                   # Ce fichier
    ├── INSTALLATION.md             # Guide d'installation détaillé
    ├── MANUEL_UTILISATION.md       # Guide utilisateur
    └── API_DOCUMENTATION.md        # Documentation API complète
```

---

## 🚀 Installation

### Prérequis
- PHP 7.4 ou supérieur
- MySQL 8.0 ou MariaDB 10.4+
- Apache 2.4 avec mod_rewrite
- Extensions PHP: PDO, PDO_MySQL, mbstring, json

### Installation Pas à Pas

#### 1. Téléchargement
```bash
# Option 1: Télécharger le ZIP
# Option 2: Cloner via Git
git clone https://github.com/idrisjlidi/iberostar-djerba.git
cd iberostar-djerba
```

#### 2. Configuration de la Base de Données
```bash
# Connexion MySQL
mysql -u root -p

# Créer la base de données
CREATE DATABASE iberostar_djerba CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Importer le schéma
mysql -u root -p iberostar_djerba < database.sql
```

#### 3. Configuration PHP
Éditez `config.php`:
```php
// Base de données Tunisie
define('DB_HOST', 'localhost');
define('DB_NAME', 'iberostar_djerba');
define('DB_USER', 'iberostar_user');
define('DB_PASS', 'MotDePasseSecurise2024!');

// Configuration hôtel
define('HOTEL_NAME', 'Iberostar Waves Mehari Djerba');
define('HOTEL_LOCATION', 'Zone Touristique Sidi Mehrez, Djerba 4116');
define('HOTEL_PHONE', '+216 75 650 000');
define('HOTEL_EMAIL', 'waves.mehari.djerba@iberostar.com');

// Devises (EUR et TND)
define('DEFAULT_CURRENCY', 'EUR');
define('LOCAL_CURRENCY', 'TND');
define('EXCHANGE_RATE', 3.25); // 1 EUR = 3.25 TND
```

#### 4. Permissions
```bash
# Créer les dossiers nécessaires
mkdir -p uploads/chambres uploads/profils logs
chmod 755 uploads logs

# Permissions sécurisées
chmod 644 config.php
chmod 755 .htaccess
```

#### 5. Lancer l'Application
```bash
# Avec PHP intégré
php -S localhost:8000

# Accéder à http://localhost:8000
```

---

## 🔧 Configuration

### Configuration de l'Hôtel
```php
// Dans config.php
define('HOTEL_CATEGORY', '4'); // 4 étoiles
define('TOTAL_ROOMS', 300);
define('SEASON_HIGH', '03-01:10-31'); // Haute saison: Mars à Octobre
define('SEASON_LOW', '11-01:02-28');  // Basse saison: Novembre à Février
define('TAX_RATE', 0.19); // TVA Tunisie 19%
```

### Comptes par Défaut
```sql
-- Administrateur
Email: admin@iberostar-djerba.com
Mot de passe: Admin123

-- Personnel
ID: DJ-001
Mot de passe: Staff123

-- Client démo
Email: client@demo.com
Mot de passe: Client123
```

---

## 💻 Utilisation

### Accès Public
- **Site Web**: `http://votre-domaine.com`
- **Réservations**: `http://votre-domaine.com/booking.html`
- **Contact**: `http://votre-domaine.com/contact.html`

### Accès Administratif
- **Dashboard Admin**: `http://votre-domaine.com/admin-dashboard.html`
- **Identifiants**: admin@iberostar-djerba.com / Admin123

### Accès Personnel
- **Interface Staff**: Connexion via login.html
- **Identifiants**: DJ-001 / Staff123

---

## 📊 Dashboard Admin

### Statistiques en Temps Réel
- 📈 Taux d'occupation (92% en moyenne)
- 💰 Revenus mensuels (€42,750+)
- 👥 Répartition des nationalités
- ⭐ Notes et avis clients
- 📅 Réservations à venir

### Gestion des Chambres
- ✅ Ajout/modification/suppression
- ✅ Gestion des prix par saison
- ✅ Photos et descriptions
- ✅ Disponibilité en temps réel

### Gestion Clients
- 📋 Base de données internationale
- 🎯 Historique des séjours
- 📧 Communication intégrée
- 🌍 Analyse par nationalité

### Rapports
- 📊 Rapports financiers
- 📈 Analytics de performance
- 📋 Export Excel/PDF
- 📅 Calendrier des réservations

---

## 📡 API Documentation

### Base URL
```
http://votre-domaine.com/api/
```

### Endpoints Principaux

#### Authentification
```http
POST /api/auth.php?action=login
Content-Type: application/json

{
  "email": "client@demo.com",
  "password": "Client123",
  "user_type": "guest" // guest/admin/staff
}
```

#### Recherche de Disponibilité
```http
POST /api/rooms.php?action=availability
Content-Type: application/json

{
  "check_in": "2024-04-01",
  "check_out": "2024-04-08",
  "adults": 2,
  "children": 1,
  "room_type": "deluxe"
}
```

#### Création de Réservation
```http
POST /api/bookings.php
Content-Type: application/json
Authorization: Bearer {token}

{
  "room_id": 112,
  "check_in": "2024-04-01",
  "check_out": "2024-04-08",
  "adults": 2,
  "children": 1,
  "special_requests": "Lit bébé nécessaire",
  "payment_method": "card"
}
```

---

## 🔒 Sécurité

### Mesures Implémentées
- ✅ **Hash bcrypt** pour les mots de passe
- ✅ **Requêtes préparées PDO** contre les injections SQL
- ✅ **Tokens CSRF** pour les formulaires
- ✅ **Rate limiting** sur les API
- ✅ **Validation stricte** des données
- ✅ **Sessions sécurisées** avec régénération
- ✅ **Headers de sécurité** HTTP

### Recommandations Production
1. **HTTPS obligatoire** avec certificat SSL
2. **Changer tous les mots de passe** par défaut
3. **Configurer le firewall** (fail2ban)
4. **Sauvegardes automatiques** quotidiennes
5. **Monitoring** (Uptime, logs)
6. **CDN** pour les assets statiques

### Conformité RGPD/Tunisie
- ✅ Consentement explicite des utilisateurs
- ✅ Droit à l'oubli implémenté
- ✅ Chiffrement des données sensibles
- ✅ Politique de confidentialité intégrée

---

## 🤝 Contribuer

### Développeurs Tunisiens Bienvenus!
Ce projet est ouvert aux contributions de la communauté tech tunisienne.

### Processus de Contribution
1. **Fork** le projet
2. **Branche** (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commit** (`git commit -m 'Ajout: Nouvelle fonctionnalité'`)
4. **Push** (`git push origin feature/nouvelle-fonctionnalite`)
5. **Pull Request**

### Standards de Code
- Commentaires en français
- Code propre et documenté
- Tests unitaires appréciés
- Respect du design existant

---

## 👨‍💻 Auteur

**Idris Jlidi**  
Développeur Full-Stack - Tunisie

- 📧 Email: idrisj727@gmail.com
- 💼 LinkedIn: [Idris Jlidi](https://www.linkedin.com/in/idrisjlidi)
- 🐱 GitHub: [@idrisjlidi](https://github.com/idrisjlidi)
- 🌍 Site: [Portfolio](https://idrisjlidi.dev)

### Spécialisations
- Développement Web PHP/JavaScript
- Systèmes de réservation hôtelière
- Solutions e-commerce
- Applications sur mesure

---

## 📞 Contact & Support

### Support Technique
- 📧 Email: support@iberostar-djerba.com
- 📞 Téléphone: +216 75 650 000 (ext. 123)
- 🐛 Issues: [GitHub Issues](https://github.com/idrisjlidi/iberostar-djerba/issues)

### Hôtel Iberostar Waves Mehari Djerba
- 📍 Adresse: Zone Touristique Sidi Mehrez, Djerba 4116, Tunisie
- 📞 Réservations: +216 75 650 000
- 📧 Email: waves.mehari.djerba@iberostar.com
- 🌐 Site: [iberostar.com](https://www.iberostar.com)

### Heures de Support
- **Lundi - Vendredi**: 9h00 - 18h00 (GMT+1)
- **Urgences techniques**: 24h/24

---

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

### Utilisation Commerciale
- ✅ Libre pour usage personnel
- ✅ Licence commerciale disponible
- ✅ Support professionnel optionnel
- ✅ Personnalisations sur mesure

---

## 🙏 Remerciements

- **Équipe Iberostar** pour la confiance
- **Communauté tech Tunisienne** pour l'inspiration
- **Unsplash** pour les images de qualité
- **Font Awesome** pour les icônes
- **Tous les contributeurs** open source

---

## 🎯 Roadmap 2024

### Q1 2024
- [x] Développement du système de base
- [x] Interface admin complète
- [x] API RESTful fonctionnelle

### Q2 2024
- [ ] Intégration paiement en ligne (Carte Tunisienne)
- [ ] Application mobile (React Native)
- [ ] Système de fidélité

### Q3 2024
- [ ] Intelligence artificielle (prédiction occupation)
- [ ] Chatbot support client
- [ ] Analyse de sentiment des avis

### Q4 2024
- [ ] Système de revenue management
- [ ] Intégration avec les OTAs
- [ ] Export vers systèmes comptables tunisiens

---

<div align="center">

## 🇹🇳 Tunisie Digitale - Made with Pride in Tunisia

**⭐ Soutenez le projet en lui donnant une étoile sur GitHub!**

```
  _____         _           _        _____ _       _     
 |_   _|       | |         (_)      |  __ (_)     | |    
   | |_ __ __ _| |__  _ __  _ _ __  | |  \/_ _ __ | | __ 
   | | '__/ _` | '_ \| '_ \| | '_ \ | | __| | '_ \| |/ / 
   | | | | (_| | |_) | | | | | | | || |_\ \ | | | |   <  
   \_/_|  \__,_|_.__/|_| |_|_|_| |_| \____/_|_| |_|_|\_\ 
```

**Iberostar Waves Mehari Djerba © 2024 - Tous droits réservés**

</div>
