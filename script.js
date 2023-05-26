var muneco = document.querySelector(".muñeco");
var h3 = document.querySelector(".negritash3");
var parrafo = document.querySelector(".parrafo");
var resultado = document.querySelector(".texto-resultado");

function encrypt() {
    ocultarAdelante ();
    var inputText = document.getElementById("input-text").value;
    var encryptedText = "";
    for (var i = 0; i < inputText.length; i++) {
      var letter = inputText.charAt(i);
      switch (letter) {
        case "e":
          encryptedText += "enter";
          break;
        case "i":
          encryptedText += "imes";
          break;
        case "a":
          encryptedText += "ai";
          break;
        case "o":
          encryptedText += "ober";
          break;
        case "u":
          encryptedText += "ufat";
          break;
        default:
          encryptedText += letter;
          break;
      }
    }
    resultado.textContent = encryptedText
  }

  
  function decrypt() {
    ocultarAdelante ();
    var inputText = document.getElementById("input-text").value;
    var decryptedText = "";
  
    for (var i = 0; i < inputText.length; i++) {
      var letter = inputText.charAt(i);
  
      switch (letter) {
        case "e":
          if (inputText.substr(i, 5) === "enter") {
            decryptedText += "e";
            i += 4;
          } else {
            decryptedText += letter;
          }
          break;
        case "i":
          if (inputText.substr(i, 4) === "imes") {
            decryptedText += "i";
            i += 3;
          } else {
            decryptedText += letter;
          }
          break;
        case "a":
          if (inputText.substr(i, 2) === "ai") {
            decryptedText += "a";
            i += 1;
          } else {
            decryptedText += letter;
          }
          break;
        case "o":
          if (inputText.substr(i, 4) === "ober") {
            decryptedText += "o";
            i += 3;
          } else {
            decryptedText += letter;
          }
          break;
        case "u":
          if (inputText.substr(i, 4) === "ufat") {
            decryptedText += "u";
            i += 3;
          } else {
            decryptedText += letter;
          }
          break;
        default:
          decryptedText += letter;
          break;
      }
    }
  
    resultado.textContent = decryptedText;
  }
  
function ocultarAdelante(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

//var copiar = document.querySelector(".botoncopiar");
//copiar.addEventListener("click", copiarResultado);

function copiarResultado() {

    var resultado = document.querySelector(".texto-resultado").textContent;
    var tempInput = document.createElement("input");
    tempInput.value = resultado;
    document.body.appendChild(tempInput);
  
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
  
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    alert("El mensaje se ha copiado al portapapeles.");
  }

function reiniciar() {
    document.getElementById("input-text").value = "";
    document.querySelector(".texto-resultado").textContent = "";
    muneco.classList.remove("ocultar");
    h3.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
  }
