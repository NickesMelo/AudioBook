const audioControls = document.querySelector("#audio-controls");
const buttonPlay = document.querySelector("#button-play");
const buttonPause = document.querySelector("#button-pause");


function onDOMContentLoaded() {
    logDOMLoaded();
    initialize();
   
}

function logDOMLoaded() {
    console.log("DOM carregou.");
}

function initialize() {
    console.log("Inicialização do projeto no clean code");
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