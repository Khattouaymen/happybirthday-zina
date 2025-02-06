function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(() => {
    let newColor = getRandomColor();
    console.log(`Changing background color to: ${newColor}`);
    document.body.style.backgroundColor = newColor;
}, 1000);

document.getElementById('confetti-btn')?.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70
    });
    // New logic for the number
    const numberEl = document.getElementById('number');
    numberEl.classList.add('fall');
    setTimeout(() => {
        numberEl.textContent = '18 ans';
        numberEl.classList.remove('fall');
    }, 1000);
});
