document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("login-modal");
    const closeModalButton = document.getElementById("close-modal");

    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    document.getElementById("modalLoginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("modal-username").value;
        const password = document.getElementById("modal-password").value;
        if (username && password) {
            localStorage.setItem("loggedInUser", username);
            window.location.href = "pages/dashboard.html";
        }
    });
});
