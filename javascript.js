
function encriptar() {
    var texto = document.getElementById("inputtextizq").value.toLowerCase();
    // i es para que afecte tanto mayuscula como minuscula 
    // g es para toda la linea y oracion 
    // m es para que afecte a multiples lineas o parrafos
    var textcifrado = texto.replace(/e/igm, "enter");
    var textcifrado = textcifrado.replace(/o/igm, "ober");
    var textcifrado = textcifrado.replace(/i/igm, "imes");
    var textcifrado = textcifrado.replace(/a/igm, "ai");
    var textcifrado = textcifrado.replace(/u/igm, "ufat"); // el / sirve para buscar toda palabra con e

    document.getElementById("imgdere").style.display = "none";
    document.getElementById("text1-conta").style.display = "none";
    document.getElementById("text2-conta").innerHTML = textcifrado; // el textcifrado esta mas arriba
    // el innerhtml cambia eso quew tenemos en el text area o input por el texto que esribimos anteriormente
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit"; //inherit es heredar

}

function desencriptar() {
    var texto = document.getElementById("inputtextizq").value.toLowerCase();
    // i es para que afecte tanto mayuscula como minuscula 
    // g es para toda la linea y oracion 
    // m es para que afecte a multiples lineas o parrafos
    var textcifrado = texto.replace(/enter/igm, "e");
    var textcifrado = textcifrado.replace(/ober/igm, "o");
    var textcifrado = textcifrado.replace(/imes/igm, "i");
    var textcifrado = textcifrado.replace(/ai/igm, "a");
    var textcifrado = textcifrado.replace(/ufat/igm, "u"); // el / sirve para buscar toda palabra con e

    document.getElementById("imgdere").style.display = "none";
    document.getElementById("text1-conta").style.display = "none";
    document.getElementById("text2-conta").innerHTML = textcifrado; // el textcifrado esta mas arriba
    // el innerhtml cambia eso quew tenemos en el text area o input por el texto que esribimos anteriormente
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit"; //inherit es heredar

}



// Obtener el texto del elemento textarea
// var texto = text2 - conta.value;

// Copiar el texto al portapapeles
// navigator.clipboard.writeText(texto);

function copy() {
    var texto = document.querySelector('#text2-conta').value;
    navigator.clipboard.writeText(texto);
    Swal.fire({
        title: "COPIADO!",
        icon: 'success'
    })
}
var boton3 = document.querySelector('#btn-copiar'); boton3.onclick = copy;

