document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const dob = document.getElementById('dob');
    const genderInputs = document.getElementsByName('gender');
    const profilePicture = document.getElementById('profile-picture');
    const preview = document.getElementById('preview');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            this.submit();
        }
    });

    username.addEventListener('blur', validateUsername);
    email.addEventListener('blur', validateEmail);
    password.addEventListener('blur', validatePassword);
    dob.addEventListener('blur', validateDOB);
    genderInputs.forEach(input => input.addEventListener('change', validateGender));

    profilePicture.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });

    function validateForm() {
        return validateUsername() &&
               validateEmail() &&
               validatePassword() &&
               validateDOB() &&
               validateGender();
    }

    function validateUsername() {
        const usernameError = document.getElementById('usernameError');
        if (username.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long';
            return false;
        }
        usernameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePassword() {
        const passwordError = document.getElementById('passwordError');
        if (password.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            return false;
        }
        passwordError.textContent = '';
        return true;
    }

    function validateDOB() {
        const dobError = document.getElementById('dobError');
        const today = new Date();
        const birthDate = new Date(dob.value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 13) {
            dobError.textContent = 'You must be at least 13 years old to register';
            return false;
        }
        dobError.textContent = '';
        return true;
    }

    function validateGender() {
        const genderError = document.getElementById('genderError');
        if (!Array.from(genderInputs).some(input => input.checked)) {
            genderError.textContent = 'Please select a gender';
            return false;
        }
        genderError.textContent = '';
        return true;
    }
});