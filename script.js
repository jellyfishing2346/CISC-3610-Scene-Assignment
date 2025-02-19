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
    ctx.fillText(text, x + 10, y + 25);
}

// Function to draw the scene
function drawScene() {
    // Draw background
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Draw foreground images
    const jerryX = 100;
    const jerryY = 300;
    const jerryWidth = 150;
    const jerryHeight = 150;
    ctx.drawImage(foregroundImage1, jerryX, jerryY, jerryWidth, jerryHeight);

    const tomX = 500;
    const tomY = 200;
    const tomWidth = 200;
    const tomHeight = 200;
    ctx.drawImage(foregroundImage2, tomX, tomY, tomWidth, tomHeight);

    // Add speech bubbles
    drawSpeechBubble(ctx, jerryX - 50, jerryY - 80, 150, 60, 10,
        "Hey Tom! Why so blue?");
    
    drawSpeechBubble(ctx, tomX + 50, tomY - 100, 150, 60, 10, "I hate Mondays!");
    }