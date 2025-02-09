let users = []; // This is where you would store the users (this should be handled server-side in a real app)
let currentUser = null;

function signUp() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create a new user
    let user = { username: username, password: password, points: 0 };
    users.push(user);

    alert("Sign-up successful!");
    document.getElementById("sign-up-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    // Check if user exists
    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById("login-form").style.display = "none";
        document.getElementById("minigames").style.display = "block";
        document.getElementById("user-name").textContent = currentUser.username;
    } else {
        alert("Invalid username or password!");
    }
}

function redirectToMinigames() {
    // Redirect to a page with minigames (you would replace this with the actual minigames page)
    window.location.href = "minigames.html";
}
