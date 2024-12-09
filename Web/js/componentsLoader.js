document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");

    if (headerContainer) {
        fetch("../components/header.html")
            .then((response) => response.text())
            .then((data) => {
                headerContainer.innerHTML = data;
                const logoutButton = document.getElementById("logoutButton");
                if (logoutButton) {
                    logoutButton.addEventListener("click", () => {
                        localStorage.removeItem("loggedInUser");
                        window.location.href = "../index.html";
                    });
                }
            });
    }

    if (footerContainer) {
        fetch("../components/footer.html")
            .then((response) => response.text())
            .then((data) => {
                footerContainer.innerHTML = data;
            });
    }
});

// componentsLoader.js
async function loadComponent(selector, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erro ao carregar componente');
        const html = await response.text();
        document.querySelector(selector).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}
