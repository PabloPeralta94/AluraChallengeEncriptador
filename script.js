let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");
let textoInput = document.getElementById("texto");

function validarTexto(texto) {
    var regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function actualizarInterfaz(mensaje, imagenSrc) {
    tituloMensaje.textContent = mensaje.titulo;
    parrafo.textContent = mensaje.parrafo;
    muñeco.src = imagenSrc;
}

function cifrarDecifrarTexto(operacion) {
    let texto = textoInput.value;

    if (texto.length === 0) {
        swal("Ooops!", "Debes ingresar un texto", "warning");
        return;
    }
    if (!validarTexto(texto)) {
        swal("Ooops!", "El texto solo debe contener letras minúsculas y sin acentos", "warning");
        return;
    }

    let textoTransformado = texto;
    const reglasCifrado = [
        { de: /e/gi, a: "enter" },
        { de: /i/gi, a: "imes" },
        { de: /a/gi, a: "ai" },
        { de: /o/gi, a: "ober" },
        { de: /u/gi, a: "ufat" }
    ];

    const reglasDescifrado = [
        { de: /enter/gi, a: "e" },
        { de: /imes/gi, a: "i" },
        { de: /ai/gi, a: "a" },
        { de: /ober/gi, a: "o" },
        { de: /ufat/gi, a: "u" }
    ];

    const reglas = operacion === 'cifrado' ? reglasCifrado : reglasDescifrado;

    reglas.forEach(regla => {
        textoTransformado = textoTransformado.replace(regla.de, regla.a);
    });

    textoInput.value = textoTransformado;

    const mensaje = {
        cifrado: { titulo: "Texto encriptado con éxito", parrafo: "" },
        decifrado: { titulo: "Texto desencriptado con éxito", parrafo: "" }
    };

    const imagenSrc = operacion === 'cifrado' ? "imagenes/Muñeco.png" : "imagenes/desencriptado.jpg";

    actualizarInterfaz(mensaje[operacion], imagenSrc);
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('boton-copiar').addEventListener('click', function() {
        textoInput.select();
        document.execCommand('copy');
        swal("Hecho!", "El texto ha sido copiado al portapapeles", "success");
    });

    document.getElementById('boton-encriptar').addEventListener('click', () => cifrarDecifrarTexto('cifrado'));
    document.getElementById('boton-desencriptar').addEventListener('click', () => cifrarDecifrarTexto('decifrado'));
});
