console.log("College Club Website loaded successfully.");

// Contact form validation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");
        const success = document.getElementById("form-success");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        success.textContent = "";

        let valid = true;

        if (name === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (message.length < 10) {
            messageError.textContent = "Message must be at least 10 characters.";
            valid = false;
        }

        if (valid) {
            success.textContent = "Thank you! Your message has been sent.";
            contactForm.reset();
        }
    });
}