// Attach the function to the button's click event
document.getElementById('redirectButton').addEventListener('click', redirectToDestination);

document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform registration logic (e.g., send data to server)
        console.log('Registration: Username - ' + username + ', Password - ' + password);

        // Clear form fields
        registrationForm.reset();
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Perform login logic (e.g., check credentials on the server)
        console.log('Login: Username - ' + loginUsername + ', Password - ' + loginPassword);

        // Clear form fields
        loginForm.reset();
    });
});
