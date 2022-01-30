
/* Reglas de encriptación:
"e" es convertido para "enter"
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras
*/


function capturaFrase(){

  var frase = document.querySelector("#input-texto").value;
  frase = frase.replace("e","enter");
  frase = frase.replace("i","imes");
  frase = frase.replace("a","ai");
  frase = frase.replace("o","ober");
  frase = frase.replace("u","ufat");
  console.log(frase);
  document.querySelector("#Mostrar").value = frase;

}

  function desencriptar_frase(){
  var mensaje = document.querySelector("#input-texto").value;

  mensaje = mensaje.replace("enter","e");
  mensaje = mensaje.replace("imes","i");
  mensaje = mensaje.replace("ai","a");
  mensaje = mensaje.replace("ober","o");
  mensaje = mensaje.replace("ufat","u");
  document.querySelector("#Mostrar").value = mensaje;

}

 function copiar(){
 var copiado = document.querySelector("#Mostrar").value;
 console.log(copiado);
 document.querySelector("#input-texto").value = copiado;
 //document.execCommand("selectAll");
 //document.execCommand("copy");
 //fromCopy.reset();
 }
