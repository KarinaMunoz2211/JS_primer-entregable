
// Breve descripción de lo que es mi entregable


let monstruos = ["Pennywise", "El Buitre", "Christine", "El Hombre de Negro"];
let intentos = 0;
let monstruoAleatorio = monstruos[Math.floor(Math.random() * monstruos.length)];

function adivinarMonstruo() {
  let respuestaUsuario = prompt("¿Quién es el monstruo? (Pista: Es uno de los más famosos de Stephen King)");
  intentos++;

  if (respuestaUsuario.toLowerCase() === monstruoAleatorio.toLowerCase()) {
    alert(`¡Felicidades! Has adivinado. Era ${monstruoAleatorio}. Te tomó ${intentos} intentos.`);
  } else {
    alert("¡Incorrecto! Intenta otra vez.");
  }
}

adivinarMonstruo();