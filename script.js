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
    drawSpeechBubble(ctx, jerryX - 50, jerryY - 80, 150, 60, 10, "Hey Tom, why the Blues?");
    drawSpeechBubble(ctx, tomX + 50, tomY - 100, 180, 60, 10, "I got the Monday Blues, Jerry!");
    
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
        // Add a small delay before drawing the scene
        setTimeout(drawScene, 100);
    }
}

// Set onload handlers for all images
backgroundImage.onload = checkAllImagesLoaded;
foregroundImage1.onload = checkAllImagesLoaded;
foregroundImage2.onload = checkAllImagesLoaded;

// Add event listener to redraw the scene when the window is resized
window.addEventListener('resize', drawScene);
