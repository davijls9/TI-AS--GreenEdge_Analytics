document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  function startSession() {
      const sessionTime = Date.now() + 5 * 60 * 1000; // 5 minutos
      localStorage.setItem("sessionExpiry", sessionTime);
  }

  function checkSession() {
      const sessionExpiry = localStorage.getItem("sessionExpiry");
      if (sessionExpiry && Date.now() > sessionExpiry) {
          logout();
      }
  }

  function logout() {
      localStorage.clear();
      window.location.href = "../index.html";
  }

  // Expor a função logout globalmente
  window.logout = logout;

  setInterval(checkSession, 10000);

  if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          if (username && password) {
              localStorage.setItem("loggedInUser", username);
              startSession();
              window.location.href = "pages/dashboard.html";
          }
      });
  }

  if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const newUsername = document.getElementById("new-username").value;
          const newPassword = document.getElementById("new-password").value;
          if (newUsername && newPassword) {
              localStorage.setItem(
                  "newUser",
                  JSON.stringify({ username: newUsername, password: newPassword })
              );
              alert("Cadastro realizado com sucesso! Faça login.");
              window.location.href = "../index.html";
          }
      });
  }

  if (logoutButton) {
      logoutButton.addEventListener("click", () => {
          logout();
      });
  }

  checkSession();
});
