document.getElementById('contactForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    try {
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const result = await response.text();
        document.getElementById('status').textContent = result;
        this.reset();
    } catch (error) {
        document.getElementById('status').textContent = 'Error sending message';
        console.error('Error:', error);
    }
});
