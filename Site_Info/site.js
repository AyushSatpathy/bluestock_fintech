// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
});
// script.js
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;

        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
        } else {
            faqAnswer.style.display = 'block';
        }
    });
});
