const soundClick = (note) => {
    let audio = new Audio();
    audio.src = `assets/audio/${note.dataset.note}.mp3`; // Указываем путь к звуку "клика"
    audio.autoplay = true;
}
const piano = document.querySelector('.piano');
const letter = e => document.querySelector(`div[data-letter="${e.code[3]}"]`);
const pianoKeyDowm = e => {
    let position = letter(e);
    if (position && e.repeat === false) {
        position.classList.add('piano-key-active');
        soundClick(position);
    }
}
const pianoKeyUp = e => {
    let position = letter(e);
    position && position.classList.remove('piano-key-active');
}
const mouseDown = e => {
    if (e.target.classList.contains('piano-key')) {
        e.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
        soundClick(e.target);
        e.target.addEventListener('mouseout', removeClass, { once: true });
        piano.addEventListener('mouseover', mouseDown);
    }
}
const removeClass = e => {
    if (e.target.classList.contains('piano-key')) {
        e.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
    }
}
const mouseUp = e => {
    piano.removeEventListener('mouseover', mouseDown);
    e.target.removeEventListener('mouseout', removeClass, { once: true });
    removeClass(e);
}
const modeToggle = e => {
    if (!e.target.classList.contains('btn-active')) {
        document.querySelectorAll('.btn').forEach(i => i.classList.toggle('btn-active'));
        document.querySelectorAll('.piano-key').forEach(i => i.classList.toggle('piano-key-letter'))
    }
}
document.addEventListener('keyup', pianoKeyUp);
document.addEventListener('keydown', pianoKeyDowm);
document.addEventListener('mouseup', mouseUp);
piano.addEventListener('mousedown', mouseDown);
document.querySelector('.btn-container').addEventListener('click', modeToggle);
document.querySelector('.openfullscreen')
    .addEventListener('click', () => !document.fullscreenElement ?
        document.documentElement.requestFullscreen() : document.fullscreenEnabled && document.exitFullscreen());