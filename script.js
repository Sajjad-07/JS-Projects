let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 100;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    let feedback = '';

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback = 'Please enter a valid number between 1 and 100.';
    } else {
        score--;

        if (userGuess === randomNumber) {
            feedback = `Congratulations! You've guessed the correct number: ${randomNumber}. Your final score is ${score}.`;
            endGame();
        } else if (userGuess < randomNumber) {
            feedback = 'Too low! Try again.';
        } else {
            feedback = 'Too high! Try again.';
        }
    }

    document.getElementById('feedback').innerText = feedback;
    document.getElementById('score').innerText = `Score: ${score}`;
});

function endGame() {
    document.getElementById('guessInput').disabled = true;
    document.getElementById('guessButton').disabled = true;
}
