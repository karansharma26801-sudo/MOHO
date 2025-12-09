
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        // Input fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        let valid = true;

        document.querySelectorAll(".error").forEach(el => el.remove());

        if (name.value.trim().length < 3) {
            showError(name, "Name must be at least 3 characters long.");
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Enter a valid email address.");
            valid = false;
        }

        if (subject.value.length > 60) {
            showError(subject, "Subject cannot exceed 60 characters.");
            valid = false;
        }

        if (message.value.trim().length < 10) {
            showError(message, "Message must be at least 10 characters long.");
            valid = false;
        }

        if (!valid) e.preventDefault();
    });
});

function showError(input, msg) {
    const error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.style.marginTop = "5px";
    error.style.fontSize = "14px";
    error.innerText = msg;
    input.parentNode.appendChild(error);
}
