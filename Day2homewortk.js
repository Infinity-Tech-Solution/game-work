// Initialize players
let players = Array.from({ length: 20 }, () => 50);

// Example animal facts
const animalFacts = [
    { fact: "A group of lions is known as a 'pride'.", isTrue: true },
    { fact: "Penguins can't fly, but they can swim very well.", isTrue: true },
    { fact: "Elephants are the largest land animals on Earth.", isTrue: true },
    { fact: "Bats are blind.", isTrue: false },
    { fact: "A snail can sleep for three years.", isTrue: true }
];

// Function to simulate a round of guessing
function playRound(fact) {
    console.log(`Fact: ${fact.fact}`);
    let correctCount = 0;

    // Simulate guesses for each player
    players = players.map(marks => {
        if (marks > 0) {
            const guess = Math.random() >= 0.5; // Randomly guess true or false
            const correct = guess === fact.isTrue;
            if (correct) {
                correctCount++;
                return marks + 10;
            } else {
                return Math.max(0, marks - 5);
            }
        }
        return marks;
    });

    console.log(`Correct answer: ${fact.isTrue}`);
    console.log(`Number of correct guesses: ${correctCount}`);
    console.log(`Players' marks: ${players.join(', ')}`);
}

// Function to check if there is a winner
function checkWinner() {
    const activePlayers = players.filter(marks => marks > 0);
    if (activePlayers.length === 1) {
        return players.indexOf(activePlayers[0]) + 1; // Returning player number (1-indexed)
    }
    return null;
}

// Main game loop
function startGame() {
    while (true) {
        // Randomly select a fact for the round
        const fact = animalFacts[Math.floor(Math.random() * animalFacts.length)];
        playRound(fact);

        // Check for a winner
        const winner = checkWinner();
        if (winner !== null) {
            console.log(`Player ${winner} wins the game!`);
            break;
        }
    }
}

// Start the game
startGame();
