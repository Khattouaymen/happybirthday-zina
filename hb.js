document.addEventListener("DOMContentLoaded", () => {
    const surpriseButton = document.getElementById("surpriseButton");
    surpriseButton.addEventListener("click", () => {
        document.body.style.backgroundColor = getRandomColor();
        animateImages();
    });

    // Change background color every 1 second
    setInterval(() => {
        let newColor = getRandomColor();
        console.log(`Changing background color to: ${newColor}`);
        document.body.style.backgroundColor = newColor;
    }, 1000);

    // Start continuous image animation
    startImageAnimation();
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startImageAnimation() {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    if (img1 && img2) {
        // Add continuous animation using CSS
        img1.style.transition = "transform 1s ease-in-out";
        img2.style.transition = "transform 1s ease-in-out";
        img1.style.animation = "zoomInOut 2s infinite";
        img2.style.animation = "zoomInOut 2s infinite";
    }
}

// Add this CSS to your stylesheet or in a <style> tag in your HTML
const style = document.createElement('style');
style.textContent = `
    @keyframes zoomInOut {
        0%, 100% { transform: scale(1) rotate(13deg); }
        50% { transform: scale(1.1) rotate(13deg); }
    }
    #img2 {
        animation-direction: reverse !important;
    }
`;
document.head.appendChild(style);