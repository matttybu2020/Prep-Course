// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 12;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {

// "Return" la string provista: str
// Tu código:

str="hola";

return str;

}  devolverString();

function suma(x, y) {
// "x" e "y" son números
// Suma "x" e "y" juntos y devuelve el valor
// Tu código:
    
  x=1;
  y=5;
  var suma = x + y ;
  return suma;

  } suma();


function resta(x, y) {

// Resta "y" de "x" y devuelve el valor
// Tu código:
  
  x=16;
  y=5;

var resta = x- y ;
return resta;

} resta(); 

function multiplica(x, y) {

// Multiplica "x" por "y" y devuelve el valor
// Tu código:
  
  x=12;
  y=10;

var multiplica = x*y;
return multiplica ;

} multiplica();

function divide(x, y) {

// Divide "x" entre "y" y devuelve el valor
// Tu código:

  x=25;
  y=5;
var divide = x/y;
return divide;

}  divide();
    

function sonIguales(x, y) {

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:
  x=2;
  y=2;
if (x === y ){

return "true"

}
return "false"

}  sonIguales();

function tienenMismaLongitud(str1, str2) {

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
  
  str1="Hola";
  str2="H";

if(str1==str2){
  
return "true"
}
return "false"

} tienenMismaLongitud(); 


function menosQueNoventa(num) {

// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código:
  num=65;
  
if (num < 90){

return "true"

}
return "false"
  
} menosQueNoventa();

function mayorQueCincuenta(num) {

// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:


num=85

  if (num>50){
  
  return "true"
  
  }
  return "false"
  
  }  mayorQueCincuenta();
  


function obtenerResto(x,y) {

 // Obten el resto de la división de "x" entre "y"
// Tu código:
   
    x= 10;
    y= 2;
  return(x % y);
  
 }  obtenerResto();

function esPar(num) {

  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  num=8
  
if ( num % 2 == 0){

    return "true"
}

return "false"

} esPar() ;


function esImpar(num) {

 // Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:

   num=3

  if (num % 2 == 0){
  
  return "false"
  
  }
  return "true"
  
  }  esImpar();

  function elevarAlCuadrado(num) {

    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    
    num=5
    
    let elevarAlCuadrado1= num ** 2;
    return elevarAlCuadrado1

    } elevarAlCuadrado();
    


function elevarAlCubo(num) {

// Devuelve el valor de "num" elevado al cubo
// Tu código:
  

num=5
    
let elevarAlCubo1= num ** 3;
return elevarAlCubo1

} elevarAlCubo();

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
  num=2;
  exponent=6
  let elevar = num ** exponent;
    return elevar
  
  }  elevar();

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
 num=6.99
var redondea = Math.round(num);

return redondea

} redondearNumero();

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
  num=5.33

  var redondeaArriba = Math.ceil(num);
  
  return redondeaArriba

  } redondearHaciaArriba();


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
  return Math.random();

} numeroRandom();




function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
  numero=-45;
  
  if (numero === 0 ){
   return false
  }
  if(numero >0){
    
    return "Es positivo";
    
  }
   return   "Es negativo";
  
} esPositivo();


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  let one="str";
  let two="!";
  let simbolo= one + two;
  return simbolo

} agregarSimboloExclamacion();



function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let nom="Soy";
  let apell=" Henry";
  let combinar= nom + apell;
  return combinar
  
}combinarNombres(); 



function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let nom1="hola";
  let nom2=" Martin";
  let nom3="!";
  
  let cadena = nom1 + nom2 +nom3;
    
    return cadena
  }obtenerSaludo(); 


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
 
  alto=5;
  ancho=8;
  let area = alto *ancho;
  return area
}obtenerAreaRectangulo(); 


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  lado=6
  let perimetro=lado * 4;
  return perimetro
  
}retornarPerimetro();

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  base=3;
  altura=4;
  let areadelTriangulo=(base * altura)/2;
    return areadelTriangulo;
  }areaDelTriangulo();


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
euro=2;
dolar=1.2;
  let convertirEuroaDolar=euro*dolar;
  return convertirEuroaDolar
}deEuroAdolar();


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
    letra ="a";
     
       if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
         
       return 'Es vocal'
         
      } else if (letra.length !== 1) {
        
      } 
     return 'Dato incorrecto'
      
   }esVocal();


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
