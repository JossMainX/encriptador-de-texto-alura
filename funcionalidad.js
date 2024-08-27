function encryptText() {
    let inputText = document.getElementById('input-text').value;
    let outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    displayOutput(outputText);
}

function decryptText() {
    let inputText = document.getElementById('input-text').value;
    let outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    displayOutput(outputText);
}

function displayOutput(text) {
    let messageEl = document.querySelector('.message');
    let instructionEl = document.querySelector('.instruction');
    let illustrationEl = document.querySelector('.illustration');
    let outputTextEl = document.getElementById('output-text');
    let copyButton = document.getElementById('copy-btn');

    // Ocultar la imagen y el texto de la instrucción
    messageEl.style.display = 'none';
    instructionEl.style.display = 'none';
    illustrationEl.style.display = 'none';

    // Mostrar el texto encriptado/desencriptado
    outputTextEl.innerHTML = `<p class="output-text">${text}</p>`;

    // Mostrar el botón de copiar
    copyButton.style.display = 'block';
}

function copyToClipboard() {
    let textToCopy = document.querySelector('#output-text p').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Error al copiar texto: ", err);
    });
}

document.getElementById('encrypt-btn').addEventListener('click', encryptText);
document.getElementById('decrypt-btn').addEventListener('click', decryptText);
