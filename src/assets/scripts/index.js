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

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);