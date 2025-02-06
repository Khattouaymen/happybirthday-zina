// Change background color every 1 second
setInterval(() => {
    let newColor = getRandomColor();
    console.log(`Changing background color to: ${newColor}`);
    document.body.style.backgroundColor = newColor;
}, 1000);
