// Set your desired password and redirect URL here
const correctPassword = 'sawon';
const redirectUrl = 'https://www.example.com';

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    
    if (passwordInput.value === correctPassword) {
        // Redirect to the specified URL
        window.location.href = redirectUrl;
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = ''; // Clear the input
    }
}

// Allow enter key to submit password
document.getElementById('passwordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});
