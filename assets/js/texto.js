const textArea = document.getElementById('autoresize');
const butonCrypt = document.getElementById('encrypt');
const butonDecrypt = document.getElementById('decrypt');
const containerNull = document.getElementById('null-output');
const containerFull = document.getElementById('contain-output');
const textOutput = document.getElementById('text-output');
const butonCopy = document.getElementById('copy');

containerFull.style.display = 'none';

textArea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

function modificarTexto(text) {
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
}

function desencriptarTexto(text) {
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
}


butonCrypt.addEventListener('click', () => {
    const textopuro = textArea.value
    const textoModificado = modificarTexto(textopuro);
    textOutput.textContent = textoModificado;

    containerNull.style.display = 'none';
    containerFull.style.display = 'block';
})

butonDecrypt.addEventListener('click', () => {
    const textoEncriptado = textArea.value
    const textoDesncriptado = desencriptarTexto(textoEncriptado);
    textOutput.textContent = textoDesncriptado;

    containerNull.style.display = 'none';
    containerFull.style.display = 'block';
});

butonCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(textOutput.textContent);
    alert("texto copiado en el portapapeles");
})