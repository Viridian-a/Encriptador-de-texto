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
        gatito.src = "https://img.freepik.com/vector-gratis/pulgares-arriba-icono-tecnologia-vectorial-neon-purpura-sobre-fondo-degradado_53876-125978.jpg?w=360&t=st=1685049201~exp=1685049801~hmac=82d52607fcba0da0a7f1d926aeab0ecc9f8a34b565ff87990f729037e920a4a3";
    } else {
        gatito.src = "img/señal.png";
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
        gatito.src = "https://img.freepik.com/vector-gratis/pulgares-arriba-icono-tecnologia-vectorial-neon-purpura-sobre-fondo-degradado_53876-125978.jpg?w=360&t=st=1685049201~exp=1685049801~hmac=82d52607fcba0da0a7f1d926aeab0ecc9f8a34b565ff87990f729037e920a4a3";
    } else {
        gatito.src = "img/señal.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el párrafo que deseas encriptar o desencriptar";
        alert("Debes de ingresar un texto!");
        }

}

function copyText() {
    let texto = document.getElementById("texto").value;
    const textToCopy = texto;
  
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Texto copiado al portapapeles: ", textToCopy);
        alert("Texto copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar el texto: ", error);
        alert("No se pudo copiar el texto");
      });
  }

