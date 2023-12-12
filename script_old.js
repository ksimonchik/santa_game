let currentImageIndex = 0;
let score = 0;
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
    if (answer === images[currentImageIndex].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    updateGame();
}

function updateGame() {
    currentImageIndex++;
    if (currentImageIndex < images.length) {
        santaImage.src = images[currentImageIndex].src;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        alert(`Game Over! Your score: ${score}`);
        // Reset game or navigate to a different page
    }
}

// Initialize the first image
santaImage.src = images[0].src;
