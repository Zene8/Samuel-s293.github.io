document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('home-tab2').addEventListener('click', function() {
        document.getElementById('content-title').innerText = 'Home';
        document.getElementById('content-text').innerText = 'This is the content for the Home tab.';
    });

    document.getElementById('profile-tab2').addEventListener('click', function() {
        document.getElementById('content-title').innerText = 'Profile';
        document.getElementById('content-text').innerText = 'This is the content for the Profile tab.';
    });

    document.getElementById('contact-tab2').addEventListener('click', function() {
        document.getElementById('content-title').innerText = 'Contact';
        document.getElementById('content-text').innerText = 'This is the content for the Contact tab.';
    });
});
