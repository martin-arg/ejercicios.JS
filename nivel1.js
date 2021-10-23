// ejercicio 1

console.log("Martin");
console.log("Gigli");
console.log("1112");
console.log("Programacion");

// ejercicio 2

let frase = prompt("Por favor ingrese una frase");
console.log(frase);


// ejercicio 3
let nombre = prompt("Por favor ingrese su nombre");
console.log("Hola "+ nombre);

// ejercicio 4

let nombre = prompt("Por favor ingrese su nombre");
let apellido = prompt("Por favor ingrese su apellido");
console.log(nombre + " " + apellido);

// ejercicio 5

let anios = prompt("Por favor ingrese su año de nacimiento");
let edad = 2021 - anios
console.log("Tienes " + edad + " años");

// ejercicio 6

let peso = prompt("Por favor ingrese su peso");
let altura = prompt("Por favor ingrese su altura");
let IMC = peso / (altura*altura)
console.log("Tu IMC es " + IMC);


// ejercicio 7

let cantidadDeVentanas = 10;
console.log(cantidadDeVentanas);

// ejercicio 8

let soyHumano = true;
console.log(soyHumano);

// ejercicio 9

let miGustoDePizza = "Napolitana";
console.log(miGustoDePizza);


// ejercicio 10

var variable = false;
console.log(variable);
var variable = "Hola";
console.log(variable);
var variable = 0;
console.log(variable);
var variable = "Minions";
console.log(variable);

// ejercicio 11

let base = prompt("Por favor ingrese la base del triangulo");
let altura = prompt("Por favor ingrese la altura del triangulo");
let superficie = (base * altura) / 2;
let perimetro = parseInt(base) + parseInt(base) + parseInt(altura);

console.log("El triangulo tiene una superficie de " + superficie);
console.log("El triangulo tiene un perimetro de " + perimetro);

// ejercicio 12

let peso = prompt("Por favor ingrese su Peso en libras");
let kilogramos = peso / 2.205;

console.log("Su peso en kilogramos es " + kilogramos);

// ejercicio 13

let sueldo = prompt("Por favor ingrese su sueldo");
console.log("Su nuevo sueldo es $" + sueldo * 1.15);

// ejercicio 14

let nota = prompt("Por favor ingrese su nota");
if (nota >= 7 ) {
alert("Aprobado")
} else {
  alert("reprobado")
}

// ejercicio 15

let aumentos = [0, 1.5, 3, 5]
let cate = prompt("Por favor ingrese su categoria de la 1 a la 3")
let sueldo = prompt("Por favor ingrese su sueldo")

alert("Su categoria es " + cate + " y su nuevo sueldo es " + parseInt(sueldo) * parseInt(aumentos[cate]))

// ejercicio 16

let matricula = prompt("Ingrese la matricula");
let notas = [];
let sumNotas = 0;
let promedio = 0;
let status = "desaprovado";

for (let i = 0; i < 5; i++) {
  notas[i] = prompt("Ingrese la nota numero " + (i + 1));
}

for (let i = 0; i < 5; i++) {
  sumNotas = sumNotas + Number(notas[i]);
}

promedio = sumNotas / 5;

if (promedio >= 7) {
  status = "Aprovado";
}

alert("La matricula es " + matricula + " el promedio de las notas es " + promedio + " y esta " + status);

// ejercicio 17

let numeros = []

for (let i = 0; i < 3; i++) {
  numeros[i] = prompt("Ingrese el numero " + (i + 1));
}

alert("El numero mas grande es " + Math.max.apply(null, numeros));