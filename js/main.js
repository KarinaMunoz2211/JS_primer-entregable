
// La idea de este "programa" es que al escribir uno de los títulos preestablecidos, se retorne una breve "descripción" tipo muy resumida.


//Array con títulos de Libros de Stephen King

let books = ["It", "El Instituto","El Visitante","La Sangre Manda", "El Resplandor"];
let chooseABook;

do{
  chooseABook=prompt("¿Qué libro quieres conocer?: A = It , B = El Instituto, C = El Visitante, D = La Sangre Manda , E = El Resplandor, F = Salir ");

  switch(chooseABook){
    case "A":
      if (books="A"){
      alert ("It = El libro en que aparece Pennywise, el mal de un pueblo llamado Derry");
      
      }else {
        console.log(books);
      }
     break;

    case "B":
      if (books="B"){
      alert ("El Instituto = Donde aparecen niños con poderes, que son llevados a un lugar para ser utilizados como armas");
      
    }else {
      console.log(books);
    }
    break;

    case "C":
      if (books="C"){
      alert ("El Visitante = Ente malvado que toma imagen de una persona y se alimenta de humanos");
      
    }else {
      console.log(books);
    }
    break;
    
    case "D":
      if (books="D"){
      alert ("La Sangre Manda = Recompilación de cuentos cortos, además de un caso con Holly Gibney");
      
    }else {
      console.log(books);
    }
    break;

    case "E":
      if (books="E"){
      alert ("El Resplandor Una familia va a un hotel a cuidarlo durante el invierno, pero el padre de familia se vuelve loco");
      
    }else {
      console.log(books);
    }
    break;

    case "F":
      if (books="F"){
      alert ("Hasta Pronto!");
      
    }else {
      console.log(books);
    }
    break;

    default:
    alert("Introdujiste una opción no válida")
    break
  }

} while (chooseABook !=="F");