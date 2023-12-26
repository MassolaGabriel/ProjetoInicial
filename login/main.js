const createUser = (form) => {
    form.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const users = JSON.parse(localStorage.getItem("dataLogin")) || [];

    if(!searchUser(email)) {
        const info = {
            username,
            email,
            password
        };
    
        users.push(info);
    
        localStorage.setItem("dataLogin", JSON.stringify(users));
        window.location.href = "index.html";
        return;
    }

    alert("Email already used!");
    document.getElementById("form").reset();
}

const login = (form) => {
    form.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(searchUser(email, password)) {
        localStorage.setItem("userInfo", JSON.stringify(searchUser(email, password)));
        window.location.href = "home.html";
        return;
    }
    
    alert("User not found!");
    document.getElementById("form").reset();
}

const searchUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("dataLogin")) || [];

    if(password) {
       const user = users.find((user) => user.email == email && user.password == password);
       return user; 
    }
    
    const user = users.find((user) => user.email == email);
    return user;
}

const getInfoUser = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
        const message = document.getElementById("messageLogin");
        message.innerHTML = `Your Name, ${user.username}`
        const email = document.getElementById("messageEmail");
        email.innerHTML = `Email ${user.email}`
        return;
    }
    window.location.href = "index.html"
}

const logout = () => {
        localStorage.setItem("userInfo", null);
        window.location.href = "index.html";  
}

const verifyAuthByURL = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user) {
        window.location.href = "home.html"
        return;
    }
}
