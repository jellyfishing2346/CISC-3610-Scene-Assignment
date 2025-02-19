// Get the canvas element and its 2D context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Function to resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call resizeCanvas initially and add event listener for window resize
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
// Create Image objects
const backgroundImage = new Image();
const foregroundImage1 = new Image();
const foregroundImage2 = new Image();

// Set image sources
backgroundImage.src = './images/background1.jpg';
foregroundImage1.src = './images/Jerry_The_Mouse-removebg-preview.png';
foregroundImage2.src = './images/Tom_The_Cat-removebg-preview.png';

// Counter to track loaded images
let loadedImages = 0;

// Function to draw a speech bubble
function drawSpeechBubble(ctx, x, y, width, height, radius, text) {
    // Draw bubble shape
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    // Fill and stroke the bubble
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Add text inside the bubble
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    const textX = x + 10; // Padding from left
    const textY = y + 25; // Padding from top
    ctx.fillText(text, textX, textY);
}

// Function to draw the scene
function drawScene() {
    // Draw background
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    
    // Draw foreground images
    ctx.drawImage(foregroundImage1, 100, 300, 150, 150);
    ctx.drawImage(foregroundImage2, 500, 200, 200, 200);
    
    // Add text
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Faizan Khan', 20, 50);
    ctx.fillText('Monday Blues', 20, 90);
}

// Function to check if all images are loaded
function checkAllImagesLoaded() {
    loadedImages++;
    if (loadedImages === 3) {  // We have 3 images in total
        drawScene();
    }
}

// Function to check if all images are loaded before drawing the scene
function checkAllImagesLoaded() {
    loadedImages++;
    if (loadedImages === 3) { // Ensure all three images are loaded before drawing the scene
        drawScene();
        window.addEventListener('resize', drawScene); // Redraw scene on window resize
    }
}

// Set onload handlers for all images
backgroundImage.onload = checkAllImagesLoaded;
foregroundImage1.onload = checkAllImagesLoaded;
foregroundImage2.onload = checkAllImagesLoaded;
