const audioControls = document.querySelector("#audio-controls");
const audioSource = audioControls.querySelector("source");
const buttonPlay = document.querySelector("#button-play");
const buttonPause = document.querySelector("#button-pause");
const buttonStop = document.querySelector("#button-stop");
const buttonHighVolume = document.querySelector("#button-volume-high");
const buttonMuteVolume = document.querySelector("#button-volume-mute");
const buttonNextSoudTrack = document.querySelector("#button-skip-advance");
const buttonReturnSoudTrack = document.querySelector("#button-skip-back");
const titleChapter = document.querySelector("#h1-title-chapter");
const titleAudioBook = document.querySelector("title");

let soundTrackCurrent = 1;

function onDOMContentLoaded() {
    logDOMLoaded();
    initialize();
    playAudio();
    stopAudio()
    setupEventListeners();
}

function logDOMLoaded() {
    console.log("DOM carregou.");
}

function initialize() {
    console.log("Inicialização do projeto no clean code");
}

function playAudio() {
    if (audioControls) {
        audioControls.play().then(() => {

            togglePlayPauseButtons();
            toggleHighMuteVolume();
       }).catch(error => {
            console.error("Erro ao tentar reproduzir o áudio", error);
       });
    } else {
        console.log("Áudio não encontrado");
    }
    
}

function pauseAudio() {
    if (audioControls) {
        audioControls.pause();
        togglePlayPauseButtons();
        toggleHighMuteVolume();
    } else {
        console.error("Áudio não encontrado");
    }
}

function stopAudio() {
    if(audioControls) {
        audioControls.pause();
        audioControls.currentTime = 0;
        togglePlayPauseButtons();
    } else {
        console.error("Elemento de áudio não encontrado");
    }
}

function highVolume() {
    if (audioControls) {
        audioControls.muted = false;
        toggleHighMuteVolume();
    } else {
        console.error("Elemento de áudio não encontrado");
    }
}

function muteVolume() {
    if (audioControls) {
        audioControls.muted = true;
        toggleHighMuteVolume();
    } else {
        console.error("Elemento de áudio não encontrado");
    }
}

function nextSoudTrack() {
    incrementSoundTrack();
    audioSource.setAttribute("src", `../public/audios/domcasmurro_${soundTrackCurrent}_assis.mp3`);
    audioControls.load();
    playAudio();
}

function returnSoudTrack() {
    decrementSoudTrack();
    audioSource.setAttribute("src", `../public/audios/domcasmurro_${soundTrackCurrent}_assis.mp3`);
    audioControls.load();
    playAudio();
}

function incrementSoundTrack() {
    soundTrackCurrent++;
    if (soundTrackCurrent > 30) {
        console.log("Áudio Book Dom Casmurro Finalizado!");
        soundTrackCurrent = 1; 
    }
    updateChapterTitles();
}

function decrementSoudTrack() {
    soundTrackCurrent--;
    if (soundTrackCurrent > 30) {
        soundTrackCurrent = 1; 
    } else if (soundTrackCurrent < 1) {
        soundTrackCurrent = 30;
    } else {
        console.error("Elemento de´Áudio não encontrado");
    }
    updateChapterTitles();
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
    if (audioControls.muted) {
        buttonHighVolume.classList.remove("display-none");
        buttonMuteVolume.classList.add("display-none");
    } else {
        buttonHighVolume.classList.add("display-none");
        buttonMuteVolume.classList.remove("display-none");
    }
}

function updateChapterTitles() {
    const chapterNumber = soundTrackCurrent;
    titleAudioBook.innerHTML = `om Casmurro - Capítulo ${chapterNumber}`;
    titleChapter.innerHTML = `Dom Casmurro - Capitulo ${chapterNumber}`;
} 

function setupEventListeners() {
    if (buttonPlay) {
        buttonPlay.addEventListener("click", playAudio);
    }
    if (buttonPause) {
        buttonPause.addEventListener("click", pauseAudio);
    }
    if(buttonStop) {
        buttonStop.addEventListener("click", stopAudio);
    }
    if (buttonMuteVolume) {
        buttonMuteVolume.addEventListener("click", muteVolume);
    }
    if (buttonHighVolume) {
        buttonHighVolume.addEventListener("click", highVolume);
    }
    if (buttonNextSoudTrack) {
        buttonNextSoudTrack.addEventListener("click", nextSoudTrack);
    }
    if (buttonReturnSoudTrack) {
        buttonReturnSoudTrack.addEventListener("click", returnSoudTrack);
    }
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
