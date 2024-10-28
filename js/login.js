document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            this.submit();
        }
    });

    email.addEventListener('blur', validateEmail);
    password.addEventListener('blur', validatePassword);

    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset functionality would be implemented here.');
    });

    function validateForm() {
        return validateEmail() && validatePassword();
    }

    function validateEmail() {
        const emailError = document.getElementById('emailError');
        if (email.value.trim() === '') {
            emailError.textContent = 'Please enter your email or username';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePassword() {
        const passwordError = document.getElementById('passwordError');
        if (password.value.length < 1) {
            passwordError.textContent = 'Please enter your password';
            return false;
        }
        passwordError.textContent = '';
        return true;
    }
});