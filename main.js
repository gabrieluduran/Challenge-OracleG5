let texto = document.querySelector(".frase");
let texto1 = document.querySelector(".frse2");
let mensaje = document.querySelector(".message");
let fondo = document.querySelector(".imagenDesencriptar");
fondo.style.backgroundImage = "none";


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//funcion para encriptar el texto
function botonEncriptar() {
    const textoEncriptar = encriptar(texto.value);
    texto1.value = textoEncriptar;
    texto.value = "";
    if (textoEncriptar.value !== "") {
       //texto.classList.toggle("hidden");
        texto1.classList.remove("hidden");
        fondo.classList.remove("hidden");
    }
    if(textoEncriptar !== ""){
        mensaje.classList.toggle("hidden")
        fondo.classList.remove("hidden");
    }
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

//funcion para desencriptar el texto
function botonDesencriptar() {
    const textoDesencriptar = desencriptar(texto.value);
    texto1.value = textoDesencriptar;
    texto.value = "";
    if (textoDesencriptar.value === "") {
        texto.classList.toggle("hidden");
        texto1.classList.toggle("hidden");

    }
    if(textoDesencriptar !== ""){
        mensaje.classList.toggle("hidden")
    }
}

function desencriptar(stringDesencriptado) {
    stringDesencriptado = stringDesencriptado.toLowerCase()
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringDesencriptado
}
  

//habilitar el boton de copiar
function paste() {
    const paste = document.querySelector(".botonCopiar");
    paste.style.display = "none"
    texto1.select();
    navigator.clipboard.writeText(texto1.value)
    texto1.value = "";
    alert("Texto Copiado")
    
}


