// Sample Questions and Answers
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
        correct: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correct: 2
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correct: 1
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        correct: 1
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correct: 1
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and options
function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const feedbackContainer = document.getElementById("feedback-container");
    
    // Clear previous feedback
    feedbackContainer.innerHTML = "";
    
    // Display Question
    questionContainer.innerHTML = `<h2>${questionData.question}</h2>`;
    
    // Display Options
    optionsContainer.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    // Update score
    document.getElementById("score").textContent = score;
}

// Function to handle user's answer selection
function selectAnswer(selectedIndex) {
    const questionData = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll("#options-container button");
    const feedbackContainer = document.getElementById("feedback-container");
    
    // Mark the selected answer
    buttons[selectedIndex].classList.add("selected");
    
    // Show feedback message
    if (selectedIndex === questionData.correct) {
        buttons[selectedIndex].classList.add("correct");
        feedbackContainer.innerHTML = "<p style='color: green;'>Correct!</p>";
        score++;
    } else {
        buttons[selectedIndex].classList.add("incorrect");
        feedbackContainer.innerHTML = "<p style='color: red;'>Incorrect!</p>";
    }
    
    // Disable options after selection
    buttons.forEach(button => button.disabled = true);
    
    // Show next button
    document.getElementById("next-button").style.display = "block";
}

// Function to go to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        endQuiz();
    }
}

// Function to display score and show restart button at the end of the quiz
function endQuiz() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.innerHTML = `<h2>Your Score: ${score}/10</h2>`;
    document.getElementById("next-button").style.display = "none";
    document.getElementById("restart-button").style.display = "block";
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    document.getElementById("next-button").style.display = "none";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("score-container").innerHTML = `<p>Score: <span id="score">0</span>/10</p>`;
}

// Initialize the quiz when the page loads
window.onload = function() {
    loadQuestion();
};
