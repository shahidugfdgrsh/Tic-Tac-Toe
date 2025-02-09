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
let points = 0;
let currentQuestion = {};

function generateMathQuestion(difficulty) {
    let num1, num2, answer;

    if (difficulty === 'easy') {
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        answer = num1 + num2;
    } else if (difficulty === 'medium') {
        num1 = Math.floor(Math.random() * 50);
        num2 = Math.floor(Math.random() * 50);
        answer = num1 + num2;
    } else if (difficulty === 'hard') {
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);
        answer = num1 + num2;
    }

    currentQuestion = { num1, num2, answer };
    document.getElementById('question').textContent = `What is ${num1} + ${num2}?`;
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const feedback = document.getElementById('feedback');
    
    if (userAnswer === currentQuestion.answer) {
        points += 2; // Easy level points (you can increase for other difficulty levels)
        feedback.textContent = `Correct! You earned 2 GM points.`;
        document.getElementById('points-display').textContent = points;
    } else {
        feedback.textContent = `Incorrect. Try again!`;
    }
function redeemReward() {
    const reward = document.getElementById('reward-select').value;
    const amount = parseInt(document.getElementById('amount').value);
    const username = document.getElementById('username').value;
    let feedback = '';

    if (reward === 'freefire') {
        if (amount >= 100 && amount % 10 === 0) {
            feedback = `Success! Redeemed ${amount} Free Fire Diamonds.`;
        } else {
            feedback = 'Invalid amount. Minimum is 100 Free Fire Diamonds.';
        }
    } else if (reward === 'pubg') {
        if (amount >= 60) {
            feedback = `Success! Redeemed ${amount} PUBG UC.`;
        } else {
            feedback = 'Invalid amount. Minimum is 60 PUBG UC.';
        }
    } else if (reward === 'codm') {
        if (amount >= 80) {
            feedback = `Success! Redeemed ${amount} CODM CP.`;
        } else {
            feedback = 'Invalid amount. Minimum is 80 CODM CP.';
        }
    } else if (reward === 'googleplay') {
        if (amount >= 5) {
            feedback = `Success! Redeemed $${amount} Google Play Gift Card.`;
        } else {
            feedback = 'Minimum redemption is $5.';
        }
    }

    // Show feedback to the user
    document.getElementById('redeem-feedback').textContent = feedback;
}
    
    // Load new question after answering
    generateMathQuestion('easy'); // Change 'easy' to 'medium' or 'hard' as needed
}

function redeemPoints() {
    // Redirect to redeem page (You'll add the redeem functionality here)
    window.location.href = 'redeem.html';
}

// Start the first question
generateMathQuestion('easy'); // Change difficulty based on user's choice
        
