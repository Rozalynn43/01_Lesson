// Initialize EmailJS
(function(){
    emailjs.init("3PCUoxmURT_A5luK8");
})();

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const statusMessage = document.getElementById('status-message');
        const submitBtn = document.querySelector('.submit-btn');
        
        // Disable button and show loading message
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        statusMessage.textContent = '';
        
        // Send email using EmailJS
        emailjs.sendForm('service_46juq4b', 'template_yonl63w', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                statusMessage.style.color = '#4CAF50';
                statusMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                document.getElementById('contact-form').reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, function(error) {
                console.log('FAILED...', error);
                statusMessage.style.color = '#f44336';
                statusMessage.textContent = 'Failed to send message. Please try again or email me directly.';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
    });
});