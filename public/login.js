$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        var username = $('#username').val();
        var password = $('#password').val();

        // Simple validation
        if (username.trim() === '' || password.trim() === '') {
            $('#loginMessage').text('Please enter both username and password.');
        } else if (username === 'admin' && password === '123456') {
            $('#loginMessage').text('Login successful!');
        } else {
            $('#loginMessage').text('Invalid username or password.');
        }
    });
});
