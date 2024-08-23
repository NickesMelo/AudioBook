const audioControls = document.querySelector("#audio-controls");
const buttonPlay = document.querySelector("#button-play");
const buttonPause = document.querySelector("#button-pause");

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
    } else {
        console.error("Áudio não encontrado");
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

function setupEventListeners() {
    if(buttonPlay) {
        buttonPlay.addEventListener("click", playAudio);
    }
    if(buttonPause) {
        buttonPause.addEventListener("click", pauseAudio);
    }
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);