const audioControls = document.querySelector("#audio-controls");
const buttonPlay = document.querySelector("#button-play");
const buttonPause = document.querySelector("#button-pause");
const buttonHighVolume = document.querySelector("#button-volume-high");
const buttonMuteVolume = document.querySelector("#button-volume-mute");

function onDOMContentLoaded() {
    logDOMLoaded();
    initialize();
    playAudio()
    setupEventListeners();
}

function logDOMLoaded() {
    console.log("DOM carregou.");
}

function initialize() {
    console.log("Inicialização do projeto no clean code");
}

function playAudio() {
    if(audioControls){
       audioControls.play().then(() => {
        togglePlayPauseButtons();
        toggleHighMuteVolume();
       }).catch(error => {
            console.error("Erro ao tentar reproduzir o áudio", error);
       })
    } else {
        console.log("Áudio não encontrado");
    }
}

function pauseAudio() {
    if(audioControls) {
        audioControls.pause();
        togglePlayPauseButtons();
        toggleHighMuteVolume();
    } else {
        console.error("Áudio não encontrado");
    }
}

function highVolume() {
    if(audioControls) {
        audioControls.muted = false;
        toggleHighMuteVolume();
    } else {
        console.error("Elemento de áudio não encontrado");
    }
}

function muteVolume() {
    if(audioControls) {
        audioControls.muted = true;
        toggleHighMuteVolume()
    } else {
        console.error("Elemento de áudio não encontrado");
    }
}

function togglePlayPauseButtons() {
    if (audioControls.paused) {
        buttonPlay.classList.remove("display-none");
        buttonPause.classList.add("display-none");
    } else {
        buttonPlay.classList.add("display-none");
        buttonPause.classList.remove("display-none");
    }
}

function toggleHighMuteVolume() {
    if(audioControls.muted == true){
        buttonHighVolume.classList.remove("display-none");
        buttonMuteVolume.classList.add("display-none");
    } else {
        buttonHighVolume.classList.add("display-none");
        buttonMuteVolume.classList.remove("display-none");
    }
}

function setupEventListeners() {
    if(buttonPlay) {
        buttonPlay.addEventListener("click", playAudio);
    }
    if(buttonPause) {
        buttonPause.addEventListener("click", pauseAudio);
    }
    if(buttonMuteVolume) {
        buttonMuteVolume.addEventListener("click", muteVolume,)
    }
    if(buttonHighVolume) {
        buttonHighVolume.addEventListener("click", highVolume);
    }
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);