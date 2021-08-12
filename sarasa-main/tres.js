function mostrar() 
{

  /*Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/


let tipo;
let origen;
let precio;
let validar;

let contadorMuñeca=0;
let contadorRompe =0;
let contadorPelota=0;
let jugueteMasVendido;

let promedioImportados=0;
let contadorImportados=0;
let acumImportados=0;

let acumuladorTotal=0;

let flagRompe=1;
let precioMasBarato=0;

let precioConIva;

do
{
tipo = prompt("Ingrese tipo (muñeca, rompecabezas, pelota)").toLowerCase();
while(!isNaN(tipo)|| tipo!="muñeca" && tipo!="rompecabezas"&& tipo!="pelota")
{
  tipo =prompt("error. ingrese tipo (muñeca, rompecabezas, pelota)").toLowerCase();
}

origen = prompt("Ingrese origen (nacional, importado)").toLowerCase();
while(!isNaN(origen)|| origen!="nacional"&& origen!="importado")
{
  origen =prompt("error. ingrese origen valido (nacional, importado)").toLowerCase();
}
precio = parseInt(prompt("Ingrese precio (entre 1000 y 5000)"));
while(isNaN(precio) || precio<1000 || precio>5000)
{
  precio =parseInt(prompt("error. Ingrese precio (entre 1000 y 5000)"));
}
validar = prompt("Quiere seguir ingresando juguetes? S/N").toLowerCase();
while (!isNaN(validar) || validar !="s" && validar != "n")
{
  validar = prompt("Error. Quiere seguir ingresando juguetes? S/N").toLowerCase(); 
}


/*ejercicio a */
switch(tipo)
{
  case "muñeca":
        contadorMuñeca++;

    break;

  case "rompecabezas":
        contadorRompe++;

        if(origen=="nacional")
        {
        if(flagRompe || precio < precioMasBarato)
        {
          precioMasBarato = precio;
          flagRompe=0;
        }
        }
    break;

  case "pelota":
        contadorPelota++;
    break;

}
if (origen== "importado")
{
  contadorImportados++;
  acumImportados= acumImportados + precio;
  promedioImportados= acumImportados/contadorImportados;
}

acumuladorTotal = acumuladorTotal + precio;

}while (validar =="s");

if(contadorMuñeca> contadorPelota && contadorMuñeca> contadorRompe)
{
jugueteMasVendido ="muñeca";
} else if (contadorRompe> contadorPelota && contadorRompe> contadorMuñeca)
{
  jugueteMasVendido ="rompecabezas";

} else if (contadorPelota> contadorRompe && contadorPelota> contadorMuñeca)
{
  jugueteMasVendido ="pelota";
}

precioConIva = acumuladorTotal * 0.21;

/*a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/

alert("a. el tipo de juguete mas vendido fue " +jugueteMasVendido);
if(promedioImportados!= 0)
{
alert("b. El promedio de precio de los juguetes importados fue $" + promedioImportados);
}
else
{
  alert("b. No hubo productos importados");
}
alert("c. la recaudacion del dia fue $" + acumuladorTotal );
if (precioMasBarato != 0)
{
  alert("d. el precio del rompecabezas nacional mas barato fue $" + precioMasBarato);
  
}
else
{
  alert("d. No hubo rompecabezas nacionales.")
}
alert("e. el IVA total fue $" + precioConIva);

}
