// Create and control audio context for random volume adjustments
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = new Audio('path/to/terrifying-sound.mp3');
const audioSource = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain();

audioSource.connect(gainNode);
gainNode.connect(audioContext.destination);

audioElement.loop = true;
audioElement.play();

// Function to adjust volume randomly
function adjustVolume() {
    gainNode.gain.value = Math.random(); // Random volume levels
}

// Function to randomly change text content
function randomizeText() {
    const texts = [
        'You cannot escape...',
        'Is it real?',
        'The darkness is near...',
        'Everything is meaningless...'
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    document.querySelector('p').textContent = randomText;
}

// Function to create random pop-ups
function randomAlert() {
    if (Math.random() < 0.1) { // 10% chance
        alert('Something is watching you...');
    }
}

// Function to randomize position of the content element
function randomizePosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const content = document.getElementById('content');
    content.style.position = 'absolute';
    content.style.left = `${x}px`;
    content.style.top = `${y}px`;
}

// Function to randomize background color
function randomizeColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Initialize functions at intervals
setInterval(adjustVolume, 1000); // Adjust volume every second
setInterval(randomizeText, 3000); // Change text every 3 seconds
setInterval(randomAlert, 5000); // Random pop-up every 5 seconds
setInterval(randomizePosition, 2000); // Randomize content position every 2 seconds
setInterval(randomizeColor, 3000); // Randomize background color every 3 seconds

// Optionally, add more chaotic interactions or events
document.addEventListener('mousemove', () => {
    randomizePosition(); // Update content position on mouse movement
});
