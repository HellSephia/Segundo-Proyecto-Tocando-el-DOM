
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => musicPiano(key));
});

function musicPiano (key) {
    const sound = document.getElementById(key.dataset.key)
    sound.currentTime = 0;
    sound.play();
}