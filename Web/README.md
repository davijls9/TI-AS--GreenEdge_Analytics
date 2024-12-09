# Projeto Web com Sistema de Autenticação

Este projeto apresenta um sistema de autenticação básico com login, registro, e navegação entre páginas autenticadas, utilizando armazenamento no `localStorage`.

## Estrutura do Projeto

```plaintext
/project-root
│
├── assets
│   ├── css
│   │   └── main.css             # Estilos gerais do projeto -> Heitor Meinicke
│   └── images                   # Imagens utilizadas no projeto
│
├── components
│   ├── header.html              # Header modularizado -> Samuel Rodrigues
│   ├── footer.html              # Footer modularizado -> Samuel Vitor
│   └── login-modal.html         # Modal de login, modularizado -> Samueal Vitor
│
├── js
│   ├── app.js                   # Arquivo principal que inicializa a aplicação -> Alexandre Franca
│   ├── auth.js                  # Funções de autenticação e manipulação do localStorage -> Heitor
│   ├── modal.js                 # Funções para manipular modais -> Samuel Vitor
│   ├── componentsLoader.js      # Carrega e injeta componentes HTML (ex. header, footer) -> Samuel Rodrigues
│   └── profile.js               # Funções específicas para a página de perfil -> Davi Jorge
│
├── pages
│   ├── dashboard.html           # Dashboard principal (apenas usuários logados) -> Heitor Meinicke
│   ├── profile.html             # Página de perfil do usuário logado -> Samuel Rodrigues
│   ├── register.html            # Página de cadastro de usuários -> Samuel Vitor
│   └── huntfinder.html          # Página adicional para busca de 'hunts' -> Davi Jorge
│
├── index.html                   # Página inicial (Login) -> Alexandre França
└── README.md                    # Documentação do projeto -> Todos membros
```
