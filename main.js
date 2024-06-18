console.warn(
  "1. Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores."
);
let a = "hola";
let b = "chao";
let temp = "como estas";
console.log(a);
console.log(b);
console.log(temp);

// !Cambio de valores a las variables
a = b;
console.log('La variable "a" ahora es= ', a);

b = temp;
console.log('La variable "b" ahora es= ', temp);

/* ------------------------------------------------------------------------------------------------------------- */

console.warn(
  "2. Función que reciba 2 números como entrada y determine cuál es el mayor."
);

function cualNumeroEsMayor(num1, num2) {
  if (num1 > num2) {
    return num1 + " es mayor que " + num2;
  } else if (num1 < num2) {
    return num2 + " es menor que " + num1;
  } else {
    return "ambos son iguales";
  }
}

console.log(cualNumeroEsMayor(5, 6));
console.log(cualNumeroEsMayor(6, 3));

/* ------------------------------------------------------------------------------------------------------------- */

console.warn(
  "3. Función que reciba un número y retorne si es un número dado es par o impar."
);

function numeroParImpar(number1) {
  if (number1 % 2 === 0) {
    return `${number1} es un numero par`;
  } else {
    return `${number1} es un numero impar`;
  }
}
console.log(numeroParImpar(3));
console.log(numeroParImpar(24));

/* ------------------------------------------------------------------------------------------------------------- */

console.warn(
  "4. Funcion que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento."
);

/* let PorcentajeDeDescuento = 10

console.log(`El porcentaje de descuento es  ${PorcentajeDeDescuento}%`) */

function precioFinalDescuento(precioOriginal, porcentajeDescuento) {
  let descuento = precioOriginal * (porcentajeDescuento / 100);
  let precioFinal = precioOriginal - descuento;
  return precioFinal;
}
console.log(
  "el precio con el descuento aplicado es de: " + precioFinalDescuento(1000, 10)
);
console.log(
  "el precio con el descuento aplicado es de: " + precioFinalDescuento(100, 10)
);

/* ------------------------------------------------------------------------------------------------------------- */

console.warn(
  "5. Función para Calcular Área: Crea una función que reciba el radio de un círculo y devuelva su área."
);

//! (A = π r²)

function areaCirculo(radio) {
  const area = Math.PI * radio ** 2;
  return area;
}

console.log("El area del circulo es: " + areaCirculo(20));
console.log("El area del circulo es: " + areaCirculo(10));

console.warn(
  "6. Función para Convertir Temperatura: Crea una función que convierta de Celsius a Fahrenheit."
);
// ºF = ºC x 1.8 + 32.

function convertirCelsiusToFahrenheit(celsius) {
  const Fahrenheit = celsius * 1.8 + 32;
  return Fahrenheit;
}

console.log(convertirCelsiusToFahrenheit(0));
console.log(convertirCelsiusToFahrenheit(1));
console.log(convertirCelsiusToFahrenheit(10));

console.warn(
  "7. Bucle for: Utiliza un bucle for para imprimir los números del 1 al 10."
);

for (let numeroDel1Al10 = 1; numeroDel1Al10 < 10; numeroDel1Al10++) {
  console.log(numeroDel1Al10);
}
console.log("ya llego al numero 10");

/* ------------------------------------------------------------------------------------------------------------- */

console.warn(
  "8. Bucle while: Utiliza un bucle while para pedir al usuario números hasta que ingrese un número negativo."
);

while (true) {
  let ingreseUnNumeroNegativo = prompt(
    "Ingrese un numero ( debe ser negativo)"
  );
  if (ingreseUnNumeroNegativo < 0){
    alert(`el numero ${ingreseUnNumeroNegativo} es un numero negativo, por favor Continue`);
  break;
  

  } else { 
  alert(`el numero ${ingreseUnNumeroNegativo} no es un numero negativo, por favor ingrese un numero negativo`);
  }

}

console.warn(
  " 9. Tabla de Multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10. "
);

let ingreseUnNumero = prompt(
  "Ingrese un numero para realizar una tabla de multiplicar con los numeros del 1 al 10"
);
if (ingreseUnNumero) {
  console.log(`La tabla de multiplicar del ${ingreseUnNumero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = ingreseUnNumero * i;
    console.log(`${ingreseUnNumero} x ${i} = ${resultado}`);
  }
}

console.log(
  `Aqui tienes la tabla de multiplicar, del numero ${ingreseUnNumero} multiplicado por los numeros del 1 al 10`
);

console.warn(
  "10. Suma de Números Pares: Calcula la suma de los números pares del 1 al 10."
);

let sumaDeNumerosPares = 0 ;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(sumaDeNumerosPares += i);
    }
  }
console.log('La suma de los números pares del 1 al 10 (2+4+6+8+10) es:', sumaDeNumerosPares);


console.warn('11. Objeto Persona: Crea un objeto persona con propiedades como nombre, edad, ciudad y un método presentarse() que muestre un mensaje de presentación.')

let persona = {
  nombre: 'jesus',
  apellido: 'nastasi',
  edad: 30,
  ciudad:'buenos aires',
  presentarse:function(){
    return `hola me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años de edad y vivo en la ciudad de ${this.ciudad}`
  }
}
console.log(persona.presentarse())


console.warn('12. Array de Objetos: Crea un array de objetos persona y utiliza un bucle para mostrar la información de cada persona.')


let arrayObjetosPersona = [
{nombre: 'jesus',
    apellido: 'nastasi',
    edad: 30,
    ciudad:'buenos aires', },

        {nombre: 'jose',
      apellido: 'rodriguez',
      edad: 28,
      ciudad:'mendoza', },

      { nombre: 'pedro',
        apellido: 'perez',
        edad: 32,
        ciudad:'mar de plata', },

         {nombre: 'david',
          apellido: 'dimarco',
          edad: 31,
          ciudad:'buenos aires', },

           { nombre: 'stefany',
            apellido: 'hernandez',
            edad: 29,
            ciudad:'buenos aires', },

          ]

console.log(arrayObjetosPersona)

for (let i = 0; i < arrayObjetosPersona.length; i++) {
  
   let persona =  arrayObjetosPersona[i];

   console.log( `Objeto persona ${i + 1}:`)
   console.log( `Nombre: ${persona.nombre}`);
   console.log( `Apellido: ${persona.apellido}`);
    console.log(`Edad: ${persona.edad}`);
   console.log(`Ciudad: ${persona.ciudad}`);
   console.log(`------------------------------`)

  }


console.warn('13. Función para Calcular Promedio: Crea una función que reciba un array de números y devuelva su promedio.')


function calcularPromedio(arrayNumeros){
  let suma = 0;
  for(let i=0; i < arrayNumeros.length; i++) {
    suma += arrayNumeros[i];
  }

  let promedio = suma / arrayNumeros.length;
  return (`El promedio del array es de ${promedio}`);
}

let arrayPromedio1 = [3, 3, 3]
console.log(calcularPromedio(arrayPromedio1))
let arrayPromedio2 = [6, 9, 4]
console.log(calcularPromedio(arrayPromedio2))
let arrayPromedio3 = [5, 15, 4]
console.log(calcularPromedio(arrayPromedio3))

