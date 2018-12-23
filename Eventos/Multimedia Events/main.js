const video = document.getElementById('video');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnPlay2 = document.getElementById('btnPlay2');

btnPlay.addEventListener('click', () => {
    video.play();
});

btnPause.addEventListener('click', () => {
    video.pause();
});

btnPlay2.addEventListener('click', () => {
    btnPlay.click();
});