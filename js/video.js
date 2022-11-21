// Add js here.

const video = document.getElementById("videoplayer");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const slow = document.getElementById("slower");
const fast = document.getElementById("faster");
const skip = document.getElementById("skip");
const mute = document.getElementById("mute");
const volumeSlider = document.getElementById("slider");
const volumeText = document.getElementById("volume");
let speed = [0.5, 1, 2];
let speedIndex = 1; // speed[1] = 1


play.addEventListener('click', function () {
    video.play();
})

pause.addEventListener('click', function () {
    video.pause();
})

slow.addEventListener('click', function () {
    if (speedIndex === 0) {
        alert("Video is at slowest speed!")
    } else {
        speedIndex--;
    }
    video.playbackRate = speed[speedIndex];
})

fast.addEventListener('click', function () {
    if (speedIndex === speed.length - 1) {
        alert("Video is at fastest speed!")
    } else {
        speedIndex++;
    }
    video.playbackRate = speed[speedIndex];
})

skip.addEventListener('click', function () {
    let current = video.currentTime;

    if (current + 15 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime = current + 15;
    }
})

mute.addEventListener('click', function () {
    if (!video.muted) {
        video.muted = true;
        this.textContent = "Unmute"
    } else {
        video.muted = false;
        this.textContent = "Mute"
    }
})

volumeSlider.addEventListener('input', function () {
    video.volume = this.value / 100;
    volumeText.textContent = this.value + "%";
})