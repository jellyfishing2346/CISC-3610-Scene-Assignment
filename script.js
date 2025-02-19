// Get the canvas element and its 2D context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create an Image object for the background
const backgroundImage = new Image();
backgroundImage.src = './images/background1.jpg'; // Path to your background image

// Draw the background once it loads
backgroundImage.onload = () => {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

// Create Image objects for foreground images
const foregroundImage1 = new Image();
foregroundImage1.src = './images/Jerry_The_Mouse.jpg'; // Path to first foreground image

const foregroundImage2 = new Image();
foregroundImage2.src = './images/Tom_The_Cat.png'; // Path to second foreground image

// Draw the first foreground image
foregroundImage1.onload = () => {
    ctx.drawImage(foregroundImage1, 100, 300, 150, 150); // Adjust position and size as needed
};

// Draw the second foreground image
foregroundImage2.onload = () => {
    ctx.drawImage(foregroundImage2, 500, 200, 200, 200); // Adjust position and size as needed
};

// Set font style and color
ctx.font = '30px Arial';
ctx.fillStyle = 'white';

// Add text to the canvas
ctx.fillText('Your Name', 20, 50); // Adjust position as needed
ctx.fillText('Scene Title', 20, 90);
