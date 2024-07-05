const facts = [
    { statement: "A group of lions is known as a 'pride'.", isTrue: true },
    { statement: "Penguins can't fly, but they can swim very well.", isTrue: true },
    { statement: "Elephants are the largest land animals on Earth.", isTrue: true },
    { statement: "Bats are blind.", isTrue: false },
    { statement: "Goldfish have a memory span of three seconds.", isTrue: false }
];

let marks = 50;
let players = 20;

const factElement = document.getElementById("fact");
const marksElement = document.getElementById("marks");
const playersElement = document.getElementById("players");
const trueBtn = document.getElementById("true-btn");
const falseBtn = document.getElementById("false-btn");

function updateGame() {
    if (players <= 1) {
        alert("You won the game!");
        return;
    }
    if (marks <= 0) {
        alert("You have been eliminated!");
        return;
    }
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact.statement;
    trueBtn.onclick = () => checkAnswer(true, randomFact.isTrue);
    falseBtn.onclick = () => checkAnswer(false, randomFact.isTrue);
}

function checkAnswer(guess, correct) {
    if (guess === correct) {
        marks += 10;
    } else {
        marks -= 5;
        if (marks < 0) marks = 0;
    }
    players = Math.max(1, players - 1);
    marksElement.textContent = marks;
    playersElement.textContent = players;
    updateGame();
}

updateGame();
