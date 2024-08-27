document.addEventListener("DOMContentLoaded", function() {
    const signupLink = document.getElementById("signup-link");
    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("../2.Sign-up-Page/signup.html", "_blank");
    });

    const form = document.getElementById("signin-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "xyz@somaiya.edu" && password === "12345678") {
            message.textContent = "Login successful!";
            message.style.color = "green";
        } else {
            message.textContent = "Invalid input!";
            message.style.color = "red";
        }
    });
});
