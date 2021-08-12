function mostrar() {

  /*Enunciado:
  Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
  nombre,
  carrera("Quimica";"Fisica";"Sistemas"),
  sexo (masculino - femenino -no binario),
  cantidad de materias(entre 1 y 5),
  Nota promedio del alumno(entre 0 y 10),
  edad (validar).
  Se debe informar de existir, o informar que no existe , en el caso que corresponda.
  a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
  b) El nombre de la alumna mas joven.
  c) Porcentaje de estudiantes que estudia cada carrera.
  d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/
let nombre;
let carrera;
let sexo;
let cantMaterias;
let notaProm;
let edad;

let mejorPromedioFisica;
let mejorAlumnoFisica;
let flagFisica=1;

let contadorFisica=0;
let porcentajeFisica=0;
let contadorSistemas=0;
let porcentajeSistemas=0;
let contadorQuimica=0;
let porcentajeQuimica=0;

let alumnaMasJoven;
let flagAlumna=1;
let edadAlumna=0;

let nombreMasMaterias;
let edadMasMaterias;
let flagMasMaterias =1;
let masMaterias;

let mensajeFisica;
let mensajeQuimica;
let mensajeSistemas;


let contadorCarreras =0;


for (let i = 0 ; i < 5 ; i ++)
{
nombre = prompt("Ingrese nombre");
while(!isNaN(nombre))
{
  nombre =prompt("error. ingrese nombre valido");
}
carrera = prompt("Ingrese carrera").toLowerCase();
while(!isNaN(carrera)|| carrera!="quimica" && carrera!="fisica"&& carrera!="sistemas")
{
  carrera =prompt("error. ingrese carrera valida").toLowerCase();
}
sexo = prompt("Ingrese sexo( m para masculino, f para femenino, nb para no binario").toLowerCase();
while(!isNaN(sexo)|| sexo!="m" && sexo!="f"&& sexo!="nb")
{
  sexo =prompt("error. ingrese sexo valido").toLowerCase();
}
cantMaterias = parseInt(prompt("Ingrese cantidad de materias (maximo 5)"));
while(isNaN(cantMaterias) || cantMaterias>5 || cantMaterias<1)
{
  cantMaterias =parseInt(prompt("error. ingrese una cantidad de materias valida"));
}
notaProm = parseInt(prompt("Ingrese nota promedio(entre 1 y 10)"));
while(isNaN(notaProm) || notaProm>10 || notaProm<1)
{
  notaProm =parseInt(prompt("error. Ingrese nota promedio(entre 1 y 10)"));
}
edad = parseInt(prompt("Ingrese edad"));
while(isNaN(edad) || edad<=0)
{
  edad =parseInt(prompt("error. ingrese edad valida"));
}

  switch(carrera)
{
  case "quimica":
    contadorQuimica++;

      break;
  case "fisica":
    contadorFisica++;
    /*ejercicio a */
    if(flagFisica || notaProm > mejorPromedioFisica) 
    {
      mejorPromedioFisica= notaProm;
      mejorAlumnoFisica = nombre;
      flagFisica =0;
    }


      break;
  case "sistemas":
    contadorSistemas++;

      break; 
}

      /*ejercicio b */
  if( sexo ==  "f")
  {
    if(flagAlumna || edad < edadAlumna)
    {
      alumnaMasJoven=nombre;
      edadAlumna=edad;
      flagAlumna=0;
    }
  }

  /*ejercicio d */
  if( carrera!="quimica")
  {
    if(flagMasMaterias || masMaterias< cantMaterias)
    {
      nombreMasMaterias=nombre;
      edadMasMaterias=edad;
      flagMasMaterias=0;
    }
  }

contadorCarreras++;
}
 /*ejercicio c */
 porcentajeFisica= (contadorFisica / contadorCarreras) * 100 ;
 if (contadorFisica!=0)
 {
 mensajeFisica = "el procentaje de alumnos de fisica es de " + porcentajeFisica +"%, ";
 } else 
 {
  mensajeFisica = "el procentaje de alumnos de fisica es de 0%, " ;
 }

 porcentajeQuimica=   (contadorQuimica / contadorCarreras) * 100 ;
 if (contadorQuimica !=0)
 {
 mensajeQuimica = "el procentaje de alumnos de Quimica es de " + porcentajeQuimica + "%, ";
 } else 
 {
  mensajeQuimica = "el procentaje de alumnos de fisica es de 0%, " ;
 }

 porcentajeSistemas = (contadorSistemas / contadorCarreras) * 100   ;
 if (contadorSistemas!=0)
 {
  mensajeSistemas = "el procentaje de alumnos de sistemas es de " + porcentajeSistemas +"%. ";
 } else
 {
  mensajeSistemas = "el procentaje de alumnos de sistemas es de 0%. " ;
 }

 
/*  a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
  b) El nombre de la alumna mas joven.
  c) Porcentaje de estudiantes que estudia cada carrera.
  d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

  if (contadorFisica > 0)
  {
 alert("a. el nombre del mejor promedio en la carra de fisica es " + mejorAlumnoFisica);
  }
  else 
  { 
 alert ("a. no se ha ingresado ningun alumno que curse fisica") ;
  }

if (edadAlumna > 0)
  {
  alert("b. el nombre de la alumna mas joven es " + alumnaMasJoven);
  }
  else 
  { 
  alert ("b. no se ha ingresado ninguna mujer")  ;
  }
alert("c." + mensajeFisica + mensajeQuimica + mensajeSistemas);


if (contadorFisica == 0 && contadorSistemas == 0)
{
   alert ("d. solo se han ingresado alumnos de la carrera quimica") ;
}
else
{
alert("d. el estudiante que estudia mas materias tiene " + edadMasMaterias + " años y su nombre es " + nombreMasMaterias);
}
}
