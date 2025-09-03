// Hire Me Button Handling
function openWhatsApp() {
    // Show the name entry modal (only on click)
    document.getElementById('hire-modal').classList.add('visible');

    // Handle "Continue" button for name confirmation
    const confirmBtn = document.getElementById('hire-confirm-name');
    confirmBtn.onclick = () => {
        const userName = document.getElementById('hire-name-input').value.trim();
        if (!userName) {
            alert('Please enter your name.');
            return;
        }

        // Hide name modal and show options modal
        closeHireModal();
        document.getElementById('hire-options-modal').classList.add('visible');

        // Handle WhatsApp option
        document.getElementById('hire-send-whatsapp').onclick = () => {
            sendHireToWhatsApp(userName);
            closeHireOptionsModal();
            showSuccessMessage(); // Show success after sending
        };

        // Handle Email option
        document.getElementById('hire-send-email').onclick = () => {
            sendHireToEmail(userName);
            closeHireOptionsModal();
            showSuccessMessage(); // Show success after sending
        };
    };
}

// Function to close name modal
function closeHireModal() {
    document.getElementById('hire-modal').classList.remove('visible');
    document.getElementById('hire-name-input').value = ''; // Reset input
}

// Function to close options modal
function closeHireOptionsModal() {
    document.getElementById('hire-options-modal').classList.remove('visible');
}

// Function to show success message for 3 seconds
function showSuccessMessage() {
    const successDiv = document.getElementById('hire-success-message');
    successDiv.classList.add('visible');
    setTimeout(() => {
        successDiv.classList.remove('visible');
    }, 3000); // Hide after 3 seconds
}

// Function to send via WhatsApp
function sendHireToWhatsApp(userName) {
    const message = encodeURIComponent(`Hi Ajeet Patel, I am ${userName}, Here is an opportunity for you.`);
    const phoneNumber = '919691822276'; // Your number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Function to send via Email (Gmail/mailto)
function sendHireToEmail(userName) {
    const subject = encodeURIComponent('Hiring Opportunity from Portfolio');
    const body = encodeURIComponent(`Hi Ajeet Patel, I am ${userName}, Here is an opportunity for you.`);
    const recipient = 'ajeetlodhii01@gmail.com'; // Your email
    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
}




// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const modal = document.getElementById('send-options-modal');
    const sendWhatsappBtn = document.getElementById('send-whatsapp');
    const sendGmailBtn = document.getElementById('send-gmail');

    // Temporary storage for form data
    let collectedData = {};

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        collectedData = { name, email, message };

        // Show the modal (only if not already visible)
        if (modal.style.display !== 'flex') {
            modal.style.display = 'flex';
        }
    });

    // Handle WhatsApp button
    sendWhatsappBtn.addEventListener('click', () => {
        sendToWhatsApp(collectedData.name, collectedData.email, collectedData.message);
        closeModal();
        showSuccess();
        form.reset();
    });

    // Handle Gmail button
    sendGmailBtn.addEventListener('click', () => {
        sendToGmail(collectedData.name, collectedData.email, collectedData.message);
        closeModal();
        showSuccess();
        form.reset();
    });
});

// Function to close the modal
function closeModal() {
    document.getElementById('send-options-modal').style.display = 'none';
}

// Function to show success message
function showSuccess() {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = 'Message prepared successfully! Check the opened app.';
    formMessage.style.display = 'block';
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 3000);
}

// Function to send via WhatsApp
function sendToWhatsApp(name, email, message) {
    const whatsappMessage = encodeURIComponent(
        `Hi Ajeet, New message from your portfolio:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const phoneNumber = '919691822276';
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
}

// Function to send via Gmail
function sendToGmail(name, email, message) {
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent(
        `Hi Ajeet,\n\nNew message from your portfolio:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const recipient = 'ajeetlodhii01@gmail.com';
    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
}

// Optional Formspree function (if needed)
function sendViaFormspree(data) {
    // ... (same as before)
}