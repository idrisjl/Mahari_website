// ===========================
// Contact Form Handler
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value.trim()
        };
        
        // Validate
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            showNotification('Veuillez remplir tous les champs requis', 'error');
            return;
        }
        
        if (!validateEmail(formData.email)) {
            showNotification('Veuillez entrer une adresse email valide', 'error');
            return;
        }
        
        // Submit via API
        try {
            const response = await fetch('api/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                showNotification('Message envoyé avec succès! Nous vous répondrons sous 24h.', 'success');
                contactForm.reset();
            } else {
                showNotification(data.error || 'Erreur lors de l\'envoi du message', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Erreur de connexion. Veuillez réessayer.', 'error');
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
