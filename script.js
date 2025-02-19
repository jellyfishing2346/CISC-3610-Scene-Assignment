// Get the canvas element and its 2D context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create Image objects
const backgroundImage = new Image();
const foregroundImage1 = new Image();
const foregroundImage2 = new Image();

// Set image sources
backgroundImage.src = './images/background1.jpg';
foregroundImage1.src = './images/Jerry_The_Mouse.jpg';
foregroundImage2.src = './images/Tom_The_Cat.png';

// Counter to track loaded images
let loadedImages = 0;

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
    ctx.fillText('Your Name', 20, 50);
    ctx.fillText('Scene Title', 20, 90);
}

// Function to check if all images are loaded
function checkAllImagesLoaded() {
    loadedImages++;
    if (loadedImages === 3) {  // We have 3 images in total
        drawScene();
    }
}

// Set onload handlers for all images
backgroundImage.onload = checkAllImagesLoaded;
foregroundImage1.onload = checkAllImagesLoaded;
foregroundImage2.onload = checkAllImagesLoaded;
