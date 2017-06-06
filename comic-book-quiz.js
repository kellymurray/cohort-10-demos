// Write your five answers

let correctAnswers = 0;

let firstAnswer = "MARVEL";
let secondAnswer = "SUPERMAN";
let thirdAnswer = "WONDER WOMAN";
let fourthAnswer = "UNCLE BEN";
let fifthAnswer = "BRUCE WAYNE";

// prompt to ask user to begin

alert("Ready to test your comic book knowledge? Go!");

// Ask five questions and keep track of the player's score

let firstQuestion = prompt("Who owns Iron Man: DC or Marvel?");

if (firstQuestion.toUpperCase() === firstAnswer) {
  correctAnswers += 1;
}

let secondQuestion = prompt("Who is Clark Kent's alter-ego?");

if (secondQuestion.toUpperCase() === secondAnswer) {
  correctAnswers += 1;
}

let thirdQuestion = prompt("Who is from the island of Themyscira?");
if (thirdQuestion.toUpperCase() === thirdAnswer){
  correctAnswers += 1;
}

let fourthQuestion = prompt("Who said 'With great power comes great responsibility'?");
if (fourthQuestion.toUpperCase() === fourthAnswer){
  correctAnswers += 1;
}

  let fifthQuestion = prompt("What is Batman's real name?");
if (fifthQuestion.toUpperCase() === fifthAnswer){
  correctAnswers += 1;
}

// Provide a message detailing score and tell the player what crown they get

console.log("You got " + correctAnswers + " questions right! Excalibur!");


// Rank the player

if (correctAnswers === 5) {
  console.log("Superior! You get the gold crown!");
} else if (correctAnswers >= 3) {
  console.log("Amazing! You get the silver crown!");
} else if (correctAnswers >= 1) {
  console.log("Incredible! You get the bronze crown.");
} else {
  console.log("Time to brush up on your superhero knowledge, sidekick!");
}
