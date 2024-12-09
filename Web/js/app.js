document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  const loggedInUser = localStorage.getItem("loggedInUser");
  const sessionExpiry = localStorage.getItem("sessionExpiry");

  // Redireciona para login se a sessão expirou ou não existe um usuário logado
  if ((!loggedInUser || (sessionExpiry && Date.now() > sessionExpiry)) && 
      currentPath !== "/index.html" && 
      currentPath !== "/pages/register.html") {
      
      localStorage.clear(); // Limpa dados de sessão se expirou
      window.location.href = "/index.html";
  }

  // Redireciona para o dashboard se já estiver logado
  if (loggedInUser && currentPath === "/index.html") {
      window.location.href = "/pages/dashboard.html";
  }
});
