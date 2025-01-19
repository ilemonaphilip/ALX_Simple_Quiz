// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById("feedback");

    // Ensure an answer is selected
    if (!userAnswerElement) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    const userAnswer = userAnswerElement.value;

    // Compare the user's answer with the correct answer and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
