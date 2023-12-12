

let currentImageIndex = 0;
let score = 0;
let attempts = 0;
const images = [
    { src: "santa_1.jpg", answer: "real" },
 { src: "santa_2.jpg", answer: "real" },
 { src: "santa_3.jpg", answer: "real" },
 { src: "santa_4.jpg", answer: "real" },
 { src: "santa_5.jpg", answer: "real" },
    // Add all 10 image paths and their answers ('real' or 'deepfake')
];
const santaImage = document.getElementById('santaImage');
const scoreElement = document.getElementById('score');

function guess(answer) {
    attempts++;
    if (answer === images[currentImageIndex].answer) {
        score++;
    }
    
    if (attempts < 10) {
        updateGame();
    } else {
        showFinalScore();
    }
}

function updateGame() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    santaImage.src = images[currentImageIndex].src;
    scoreElement.textContent = `Attempts: ${attempts}/10`;
}

function showFinalScore() {
    let message = "";
    if (score === 10) {
        message = "Awesome, you are a deepfake detection guru!";
    } else if (score >= 7) {
        message = "Great job! You've got a sharp eye.";
    } else if (score >= 4) {
        message = "Well done, it's tricky to spot these!";
    } else {
        message = "The technology is really great and confuses a lot of people. Keep practicing!";
    }
    alert(`Game Over! Your score: ${score}/10. ${message}`);
    // Reset game or navigate to a different page
}

// Initialize the first image
santaImage.src = images[0].src;
