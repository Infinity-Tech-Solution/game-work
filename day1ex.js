// Step 1: Define the array of questions
const questions = [
    {
        questionText: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        questionText: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        questionText: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        questionText: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee"
    },
    {
        questionText: "What is the boiling point of water?",
        choices: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: "100°C"
    }
];

// Step 2: Function to shuffle questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Step 3: Function to run the quiz
function runQuiz() {
    let score = 0;
    const shuffledQuestions = shuffle([...questions]); // Shuffle questions and create a copy

    // Iterate through the questions
    for (const question of shuffledQuestions) {
        console.log(question.questionText);
        for (let i = 0; i < question.choices.length; i++) {
            console.log(`${i + 1}. ${question.choices[i]}`);
        }

        // Simulate user input
        const userAnswerIndex = Math.floor(Math.random() * question.choices.length); // Random answer for simulation
        const userAnswer = question.choices[userAnswerIndex];
        console.log(`Your answer: ${userAnswer}`);

        // Check if the answer is correct
        if (userAnswer === question.correctAnswer) {
            score++;
            console.log("Correct!");
        } else {
            console.log(`Wrong! The correct answer is ${question.correctAnswer}`);
        }
        console.log(""); // Blank line for readability
    }

    // Step 4: Display the final score
    console.log(`Your final score is ${score} out of ${questions.length}`);
}

// Run the quiz
runQuiz();
