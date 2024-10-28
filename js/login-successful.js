document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const dashboardLink = document.getElementById('dashboardLink');
    let secondsLeft = 5;

    function updateCountdown() {
        countdownElement.textContent = secondsLeft;
        if (secondsLeft > 0) {
            secondsLeft--;
            setTimeout(updateCountdown, 1000);
        } else {
            window.location.href = '/index.html';
        }
    }

    dashboardLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '/index.html';
    });

    updateCountdown();
});