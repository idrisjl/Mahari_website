# 🏨 LUXE PALACE - Site Web Complet de Réservation Hôtelière

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

**Site web professionnel complet de réservation d'hôtel de luxe avec backend PHP, base de données MySQL et interface d'administration.**

![LUXE PALACE Banner](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=400&fit=crop)

---

## 📋 Table des Matières
- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Structure du Projet](#structure-du-projet)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [API Documentation](#api-documentation)
- [Captures d'écran](#captures-décran)
- [Sécurité](#sécurité)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## 🎯 Aperçu

LUXE PALACE est une plateforme complète de réservation hôtelière construite avec:
- **Frontend moderne** en HTML5, CSS3, JavaScript ES6+
- **Backend robuste** en PHP 7.4+ avec API RESTful
- **Base de données** MySQL avec schéma optimisé
- **Interface admin** complète pour la gestion
- **Système de paiement** (prêt pour intégration Stripe)
- **Sécurité avancée** (CSRF, XSS, SQL Injection)

---

## ✨ Fonctionnalités

### 🌐 Frontend Client
- ✅ **Page d'accueil** élégante avec hero section
- ✅ **Galerie de chambres** avec filtres et recherche
- ✅ **Système de réservation** en ligne
- ✅ **Authentification** client sécurisée
- ✅ **Profil utilisateur** et historique
- ✅ **Wishlist** de chambres favorites
- ✅ **Page expériences** avec forfaits
- ✅ **Page à propos** avec équipe
- ✅ **Formulaire de contact** fonctionnel
- ✅ **Design 100% responsive**

### 🛠️ Dashboard Administrateur
- ✅ **Tableau de bord** avec statistiques temps réel
- ✅ **Gestion des réservations** (CRUD complet)
- ✅ **Gestion des chambres** avec images
- ✅ **Base de données clients**
- ✅ **Rapports et analytics**
- ✅ **Gestion des avis** et modération
- ✅ **Paramètres système**
- ✅ **Interface moderne** avec sidebar

### 🔌 API Backend
- ✅ **API RESTful** complète
- ✅ **Authentification** JWT/Sessions
- ✅ **CRUD réservations**
- ✅ **Recherche chambres disponibles**
- ✅ **Gestion utilisateurs**
- ✅ **Système de contact**
- ✅ **Calcul automatique** des prix
- ✅ **Validation** des données

### 🗄️ Base de Données
- ✅ **9 tables** normalisées
- ✅ **Relations** optimisées
- ✅ **Index** pour performance
- ✅ **Triggers** automatiques
- ✅ **Procédures stockées**
- ✅ **Vues** pour analytics
- ✅ **Données de démo** incluses

### 🔒 Sécurité
- ✅ Protection **CSRF**
- ✅ Protection **SQL Injection**
- ✅ Protection **XSS**
- ✅ **Rate limiting**
- ✅ Mots de passe **hashés** (bcrypt)
- ✅ **Sessions sécurisées**
- ✅ **Headers de sécurité**
- ✅ **Validation** stricte

---

## 🛠️ Technologies

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Grid, Flexbox, Animations
- **JavaScript ES6+** - Logique interactive
- **Font Awesome 6** - Icônes
- **Responsive Design** - Mobile-first

### Backend
- **PHP 7.4+** - Logique serveur
- **MySQL 5.7+** - Base de données
- **PDO** - Requêtes préparées
- **Sessions PHP** - Authentification
- **API RESTful** - Architecture

### Outils & Bibliothèques
- **Apache/Nginx** - Serveur web
- **XAMPP/WAMP/MAMP** - Environnement de développement
- **Git** - Contrôle de version
- **PHPMailer** (optionnel) - Emails
- **Stripe API** (optionnel) - Paiements

---

## 📁 Structure du Projet

```
luxe-palace/
│
├── 📄 Pages HTML
│   ├── index.html                  # Page d'accueil
│   ├── rooms.html                  # Galerie de chambres
│   ├── experiences.html            # Expériences et forfaits
│   ├── about.html                  # À propos de l'hôtel
│   ├── contact.html                # Formulaire de contact
│   ├── login.html                  # Authentification
│   ├── admin-dashboard.html        # Dashboard admin
│   └── 404.html                    # Page d'erreur
│
├── 🎨 CSS
│   ├── css/
│   │   ├── style.css              # Styles principaux
│   │   └── admin.css              # Styles admin
│
├── ⚡ JavaScript
│   ├── js/
│   │   ├── main.js                # Fonctions principales
│   │   ├── rooms.js               # Gestion chambres
│   │   ├── auth.js                # Authentification
│   │   ├── admin.js               # Logique admin
│   │   └── contact.js             # Formulaire contact
│
├── 🔌 API PHP
│   ├── api/
│   │   ├── auth.php               # Authentification
│   │   ├── rooms.php              # Gestion chambres
│   │   ├── bookings.php           # Réservations
│   │   └── contact.php            # Messages contact
│
├── ⚙️ Configuration
│   ├── config.php                  # Configuration centrale
│   ├── database.sql                # Schéma de la base
│   └── .htaccess                   # Configuration Apache
│
├── 📚 Documentation
│   ├── README.md                   # Ce fichier
│   ├── INSTALL.md                  # Guide d'installation
│   └── NOUVEAUX_FICHIERS.md       # Liste des ajouts
│
└── 📁 Dossiers (à créer)
    ├── uploads/                    # Fichiers uploadés
    ├── logs/                       # Logs système
    └── includes/                   # Classes PHP
        ├── classes/
        ├── models/
        └── controllers/
```

---

## 🚀 Installation

### Prérequis
- PHP 7.4 ou supérieur
- MySQL 5.7 ou supérieur
- Apache avec mod_rewrite
- Extensions PHP: PDO, PDO_MySQL, mbstring

### Installation Rapide

#### 1. Cloner le Projet
```bash
git clone https://github.com/votre-username/luxe-palace.git
cd luxe-palace
```

#### 2. Créer la Base de Données
```bash
# Connexion à MySQL
mysql -u root -p

# Importer le schéma
mysql -u root -p < database.sql
```

#### 3. Configuration
Modifiez `config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'luxe_palace');
define('DB_USER', 'votre_utilisateur');
define('DB_PASS', 'votre_mot_de_passe');
```

#### 4. Créer les Dossiers
```bash
mkdir uploads logs
chmod 755 uploads logs
```

#### 5. Lancer le Serveur
```bash
# Avec PHP intégré
php -S localhost:8000

# Ou placer dans htdocs (XAMPP/WAMP)
# Puis accéder à http://localhost/luxe-palace
```

**📖 Pour une installation détaillée, voir [INSTALL.md](INSTALL.md)**

---

## 🔧 Configuration

### Base de Données
```sql
-- Créer utilisateur dédié
CREATE USER 'luxepalace_app'@'localhost' IDENTIFIED BY 'MotDePasseSecurise123!';
GRANT ALL PRIVILEGES ON luxe_palace.* TO 'luxepalace_app'@'localhost';
FLUSH PRIVILEGES;
```

### PHP
Modifiez `config.php`:
```php
// Site
define('SITE_URL', 'http://votre-domaine.com');

// Sécurité (CHANGEZ EN PRODUCTION!)
define('ENCRYPTION_KEY', 'votre-cle-unique-32-caracteres');
define('JWT_SECRET', 'votre-jwt-secret-unique');

// Email (optionnel)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_USERNAME', 'votre-email@gmail.com');
define('SMTP_PASSWORD', 'votre-mot-de-passe-app');
```

---

## 💻 Utilisation

### Comptes de Démonstration

#### 👤 Client
- **Email**: demo@client.com
- **Password**: client123

#### 🔐 Administrateur
- **Email**: admin@luxepalace.com
- **Password**: admin123

### URLs Principales
- **Accueil**: `http://localhost:8000/index.html`
- **Chambres**: `http://localhost:8000/rooms.html`
- **Login**: `http://localhost:8000/login.html`
- **Admin**: `http://localhost:8000/admin-dashboard.html`

---

## 📡 API Documentation

### Base URL
```
http://localhost:8000/api/
```

### Endpoints

#### Authentification
```http
POST /api/auth.php?action=login
Content-Type: application/json

{
  "email": "demo@client.com",
  "password": "client123"
}
```

#### Rechercher Chambres
```http
POST /api/rooms.php?action=search
Content-Type: application/json

{
  "check_in": "2024-03-01",
  "check_out": "2024-03-05",
  "guests": 2,
  "type": "deluxe"
}
```

#### Créer Réservation
```http
POST /api/bookings.php
Content-Type: application/json

{
  "room_id": 1,
  "check_in": "2024-03-01",
  "check_out": "2024-03-05",
  "guests": 2
}
```

**📖 Documentation complète dans [API.md](API.md)**

---

## 📸 Captures d'écran

### Page d'Accueil
![Homepage](https://via.placeholder.com/800x400?text=Homepage)

### Galerie de Chambres
![Rooms](https://via.placeholder.com/800x400?text=Rooms)

### Dashboard Admin
![Admin](https://via.placeholder.com/800x400?text=Admin+Dashboard)

---

## 🔒 Sécurité

### Implémentations
- ✅ Mots de passe hashés avec **bcrypt**
- ✅ Requêtes préparées **PDO**
- ✅ Protection **CSRF tokens**
- ✅ Validation **côté serveur**
- ✅ **Rate limiting** sur API
- ✅ **Headers de sécurité** HTTP
- ✅ **Sessions sécurisées**

### Recommandations Production
1. Changez **TOUS** les mots de passe
2. Activez **HTTPS**
3. Désactivez **DEBUG_MODE**
4. Configurez les **emails**
5. Activez les **backups** automatiques
6. Utilisez un **CDN** pour les assets
7. Activez **GZIP** compression

---

## 📊 Métriques

- **Lignes de Code**: ~5,000+
- **Fichiers**: 23 fichiers principaux
- **Temps de Chargement**: <2s
- **Score PageSpeed**: 90+
- **Compatibilité**: Tous navigateurs modernes
- **Responsive**: Mobile, Tablet, Desktop

---

## 🤝 Contribuer

Les contributions sont les bienvenues!

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📝 To-Do

- [ ] Intégration Stripe pour paiements
- [ ] Système d'emailing (PHPMailer)
- [ ] Upload d'images pour chambres
- [ ] Calendrier de disponibilité interactif
- [ ] Multi-langue (i18n)
- [ ] Mode sombre
- [ ] Progressive Web App (PWA)
- [ ] Tests unitaires
- [ ] Documentation API Swagger

---

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👨‍💻 Auteur

**LUXE PALACE Team**
- GitHub: [@votre-username](https://github.com/votre-username)
- Email: contact@luxepalace.com

---

## 🙏 Remerciements

- [Unsplash](https://unsplash.com) - Images de haute qualité
- [Font Awesome](https://fontawesome.com) - Icônes
- [Google Fonts](https://fonts.google.com) - Polices
- Communauté Open Source

---

## 📞 Support

Besoin d'aide?
- 📧 Email: support@luxepalace.com
- 🐛 Issues: [GitHub Issues](https://github.com/votre-username/luxe-palace/issues)
- 📖 Documentation: [Wiki](https://github.com/votre-username/luxe-palace/wiki)

---

<div align="center">

**⭐ Si ce projet vous plaît, donnez-lui une étoile sur GitHub!**

Made with ❤️ and ☕

**LUXE PALACE © 2024**

</div>
