document.addEventListener("DOMContentLoaded", () => {
    const userNameElement = document.getElementById("user-name");
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    if (userNameElement && loggedInUser) {
      userNameElement.textContent = loggedInUser;
    } else {
      window.location.href = "../index.html"; // Redireciona para o login se não estiver autenticado
    }
  });
  