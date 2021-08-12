function mostrar() {
  
 /* Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada
  mascota mientras el usuario quiera.
  De cada mascota se solicita:
  -nombre (entre 3 y 8 caracteres)
  -tipo (“mamifero”, “ave”, “reptil”)
  -sangre ( "fria", "calida")
  Si es de tipo reptil solo puede tener sangre fria
  -edad ( mayor a cero)
  -sexo( “m” de macho o “h” de hembra )
  Informar:
  a- Promedio de edad de los reptiles
  b- tipo y sexo de la mascota mas joven
  c- Del total de mascotas que porcentaje son aves
  d- De que tipo de mascota hay mas cantidad*/

  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  
  let promedioReptiles;
  let acumReptiles=0;
  let contadorReptiles=0;

  let edadMasJoven;
  let flagMascota=1;
  let sexoMasJoven;

  let contadorTotal=0;
  let porcentajeAves=0;
  let mensajeAves;

  let contadorAves=0;
  let contadorMamiferos=0;
  let especieMayorCantidad;




do
{

  
  nombre = prompt("Ingrese nombre");
while(!isNaN(nombre))
{
  nombre =prompt("error. ingrese nombre valido");
}
tipo = prompt("Ingrese tipo (mamifero, ave, reptil)").toLowerCase();
while(!isNaN(tipo)|| tipo!="mamifero" && tipo!="ave" && tipo!="reptil")
{
  tipo =prompt("error. ingrese tipo (mamifero, ave, reptil)").toLowerCase();
}
if(tipo == "reptil")
{
  sangre ="fria";
  alert("Al ser reptil, el tipo de sangre solo puede ser fria");

} 
else
{
sangre = prompt("Ingrese sangre (fria, calida)").toLowerCase();
while(!isNaN(sangre)|| sangre!="fria" && sangre!="calida")
{
  sangre =prompt("error. ingrese sangre (fria, calida)").toLowerCase();
}
}

edad = parseInt(prompt("Ingrese edad"));
while(isNaN(edad) || edad <=0 )
{
  edad =parseInt(prompt("error. ingrese edad valida"));
}

sexo = prompt("Ingrese sexo(masculino, femenino)").toLowerCase();
while(!isNaN(sexo)|| sexo!="masculino" && sexo!="femenino")
{
  sexo =prompt("error. ingrese sexo valido (masculino, femenino)").toLowerCase();
}
validar = prompt("Quiere seguir ingresando datos? S/N").toLowerCase();
while (!isNaN(validar) || validar !="s" && validar != "n")
{
  validar = prompt("Error. Quiere seguir ingresando datos? S/N").toLowerCase(); 
}

switch(tipo)
{
  case "reptil":
    contadorReptiles++;
    acumReptiles= acumReptiles + edad;

    break;
  case"mamifero":
    contadorMamiferos++;

    break;
  case "ave":
    contadorAves++;
    break;

}
/*ejercicio b */
if(flagMascota || edad < edadMasJoven)
{
  edadMasJoven = edad;
  sexoMasJoven = sexo;
  flagMascota=0;
}


/*ejercicio c */
contadorTotal++;
porcentajeAves= contadorAves * 100 / contadorTotal;
if (contadorAves!=0)
{
mensajeAves = "el procentaje de aves es de " + porcentajeAves + "%";
} else 
{
 mensajeAves = "Al no ingresar aves, el procentaje de Aves es 0%" ;
}


}while (validar =="s");

/*ejercicio d */
if(contadorAves> contadorReptiles && contadorAves> contadorMamiferos)
{
especieMayorCantidad ="aves";
} else if (contadorMamiferos> contadorReptiles && contadorMamiferos> contadorAves)
{
  especieMayorCantidad ="mamiferos";
} else if (contadorReptiles> contadorMamiferos && contadorReptiles> contadorAves)
{
  especieMayorCantidad ="reptiles";
}


promedioReptiles = acumReptiles/contadorReptiles;

/*a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/


alert("a. la edad promedio de los reptiles es " + promedioReptiles);
alert("b. la edad de la mascota mas joven es " + edadMasJoven + " y su sexo es " + sexoMasJoven);
alert("c." + mensajeAves);
alert("d. el tipo de mascotas con mayor cantidad fue " + especieMayorCantidad);

}
