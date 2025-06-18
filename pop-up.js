document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const modal = document.getElementById('constructionModal');
    const closeBtn = document.querySelector('.close');
    const btn = document.getElementById('Btn1'); 
    const subscriberbtn = document.getElementById('subscribeBtn');
    const sharebtn= document.getElementById('shareBtn');
    // Add a check to ensure elements exist before adding event listeners
    if (modal && closeBtn && btn && subscriberbtn && sharebtn) {
        // Show modal when button or image is clicked
        [btn, subscriberbtn, sharebtn].forEach(element => {
            element.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });

        // Close modal when X is clicked
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Optional: Close with ESC key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error("Could not find one or more required elements (modal, close button, or trigger button).");
    }
});