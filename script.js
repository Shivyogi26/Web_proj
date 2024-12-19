// scripts.js

// Mock database for user registration and login using localStorage
const databaseName = "login";

// Initialize the database if not already set
if (!localStorage.getItem(databaseName)) {
    localStorage.setItem(databaseName, JSON.stringify([]));
}

// Function to retrieve users from the database
function getUsers() {
    return JSON.parse(localStorage.getItem(databaseName));
}

// Function to save users to the database
function saveUsers(users) {
    localStorage.setItem(databaseName, JSON.stringify(users));
}

// Function to handle user registration
function registerUser(username, password) {
    const users = getUsers();
    
    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert("Username already exists. Please choose a different username.");
        return false;
    }

    // Add the new user to the database
    users.push({ username, password });
    saveUsers(users);
    alert("Registration successful! You can now log in.");
    return true;
}

// Function to handle user login
function loginUser(username, password) {
    const users = getUsers();

    // Check if the user exists and the password matches
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Login successful! Welcome back, " + username + "!");
        return true;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}

// Attach event listeners to the form
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if it is a login attempt or registration (mock example)
    if (event.submitter.innerText === "Login") {
        loginUser(username, password);
    } else if (event.submitter.innerText === "Create an Account") {
        registerUser(username, password);
    }
});
