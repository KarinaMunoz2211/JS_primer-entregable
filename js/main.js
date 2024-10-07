
// La idea de este "programa" es que al escribir uno de los títulos preestablecidos, se retorne una breve "descripción" tipo muy resumida.


  /*let book= prompt ("¿Qué libro quieres conocer?: It , El Instituto, El Visitante, La Sangre Manda , El Resplandor")
     switch (book){
      case "It":
    alert ("El libro en que aparece Pennywise, el mal de un pueblo llamado Derry");
    break;
  case "El Instituto":
    alert ("Donde aparecen niños con poderes, que son llevados a un lugar para ser utilizados como armas");
    break;
  case "El Visitante":
    alert ("Ente malvado que toma imagen de una persona y se alimenta de humanos");
    break;
  case "La Sangre Manda":
    alert ("Recompilación de cuentos cortos, además de un caso con Holly Gibney");
    break;
  case "El Resplandor":
    alert ("Una familia va a un hotel a cuidarlo durante el invierno, pero el padre de familia se vuelve loco");
    break;
  default:
    alert("Introdujiste una opción no válida")
    break;
}*/

//--------------------------------------------

//Array con títulos de Libros de Stephen King
//const books = ["It", "El Instituto","El Visitante","La Sangre Manda", "El Resplandor"];
//chooseABook
//searchBook

//ACÁ SE DECLARA LA FUNCIÓN

// function searchBook(bookTittle)

let books;

do{
  books = prompt ("¿Qué libro quieres conocer?: A = It , B = El Instituto, C = El Visitante, D = La Sangre Manda , E = El Resplandor, F = Salir ");
 
  switch (books){
    case "A":
      alert ("It = El libro en que aparece Pennywise, el mal de un pueblo llamado Derry");
      break;
    case "B":
      alert ("El Instituto = Donde aparecen niños con poderes, que son llevados a un lugar para ser utilizados como armas");
      break;
    case "C":
      alert ("El Visitante = Ente malvado que toma imagen de una persona y se alimenta de humanos");
      break;
    case "D":
      alert ("La Sangre Manda = Recompilación de cuentos cortos, además de un caso con Holly Gibney");
      break;
  case "E":
    alert ("El Resplandor Una familia va a un hotel a cuidarlo durante el invierno, pero el padre de familia se vuelve loco");
    break;
  case "F":
    alert ("Hasta Pronto!");
    break;
  default:
    alert("Introdujiste una opción no válida")
    break
  }
}while (books !== "F");