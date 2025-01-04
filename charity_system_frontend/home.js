
function signup() {
    const form = document.getElementById('signupForm');
    const mainContent = document.querySelector('main');
    form.style.display = "block"; // Show the form
    mainContent.classList.add('blur-background'); // Add blur effect
}

function closeForm() {
    const form = document.getElementById('signupForm');
    const mainContent = document.querySelector('main');
    form.style.display = "none"; // Hide the form
    mainContent.classList.remove('blur-background'); // Remove blur effect
}