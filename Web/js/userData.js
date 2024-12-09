const UserData = {
    register(username, password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.find(user => user.username === username)) {
            return false; // Usuário já existe
        }

        const newUser = {
            username,
            password, // Em uma aplicação real, a senha deveria ser criptografada
            creationDate: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    },

    login(username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        return users.find(user => user.username === username && user.password === password);
    },

    getUser(username) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        return users.find(user => user.username === username);
    }
};
