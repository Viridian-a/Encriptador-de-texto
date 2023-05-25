function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let gatito = document.getElementById("imagenInicial");

    let textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        gatito.src = "https://i.pinimg.com/originals/8b/28/0f/8b280f762a58b769486a6defa01715c9.jpg";
    } else {
        gatito.src = "https://i.pinimg.com/originals/a9/f0/41/a9f041c3a16b4de92b5480dca450f2c2.jpg";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el párrafo que deseas encriptar o desencriptar";
        alert("Debes de ingresar un texto!");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let gatito = document.getElementById("imagenInicial");

    let textoCifrado = texto
                            .replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        gatito.src = "https://i.pinimg.com/originals/8b/28/0f/8b280f762a58b769486a6defa01715c9.jpg";
    } else {
        gatito.src = "https://i.pinimg.com/originals/a9/f0/41/a9f041c3a16b4de92b5480dca450f2c2.jpg";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el párrafo que deseas encriptar o desencriptar";
        alert("Debes de ingresar un texto!");
        }

    }