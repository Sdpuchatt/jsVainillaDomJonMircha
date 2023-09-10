/**1) Programa una función que cuente el número de caracteres de una cadena de 
    texto, pe. miFuncion("Hola Mundo") devolverá 10. */
function cuentaLongitud(cadena=""){
    return cadena.length;
}
let result = cuentaLongitud("Hola Mundo");
console.log(result);

/**2) Programa una función que te devuelva el texto recortado según el número
    de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
function cortaCadena(cadena, dondeCortar){
    return cadena.slice(0, dondeCortar);
}

let result2 = cortaCadena("Hola Mundo", 4);
console.log(result2);

/**3) Programa una función que dada una String te devuelva un Array de textos 
    separados por cierto caracter, pe. miFuncion('hola que tal','') 
    devolverá ['hola', 'que', 'tal']. */
function separarCadena(cadena,simbolo){
    return cadena.split(simbolo);
}
let result3 = separarCadena("hola que tal", " ");
console.log(result3);
result3 = separarCadena("ESTOxeSunaPxueba", "x");
console.log(result3);

/**4) Programa una función que repita un texto X veces, 
    pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

function repetirCadena(cadena, repeticion){
    return cadena.repeat(repeticion);
}
let result4 = repetirCadena("Hola Mundo ", 3);
console.log(result4);
/**
 *   5) Programa una función que invierta las palabras de una cadena de texto, 
 *      pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 * 
 */
function invertirCadena(cadena) {
    let aux = "";
    cadena = cadena.trim();
    for(let i=1; i<=cadena.length;i++){
        aux += cadena[cadena.length-i];
        console.log(aux);
    }
    return aux;
}
let result5 = invertirCadena("Hola Mundo");
console.log(result5);
function invertirCadena2(cadena){
    return cadena.split("").reverse().join("");
}
let result6 = invertirCadena2("Hola Mundo");
console.log(result6);
/**6) Programa una función para contar el número de veces que se repite 
        una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
    
function contarPalabras(cadena, palabra){
    let contador = 0;
    cadena = cadena.split(" ");
    for(var i=0; i<cadena.length; i++){
        if(cadena[i]==palabra) contador++;
    }
    return contador;
}

let result7 = contarPalabras("hola mundo adios mundo", "mundo");
console.log(result7);

/** 7) Programa una función que valide si una palabra o frase dada, 
        es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */
        
function esPalindromo(cadena){
    let i = 0;
    cadena = cadena.toLowerCase();
    console.log(cadena.charAt(i),cadena.charAt(cadena.length-1-i))
    for(let i=0;i<cadena.length;i++){
        if(cadena.charAt(i)!=cadena.charAt(cadena.length-1-i)){
            return false;
        }
    }
    return true;
}

let result8 = esPalindromo("salas");   
console.log(result8);
/** 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
        pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/ 
        
function eliminarCadena(cadena, patron){
    cadena = cadena.replaceAll(patron,"");
    return cadena;
}
result9 = eliminarCadena("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");
console.log(result9);

/** 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
function numeroAleatorio(){
    return Math.floor((Math.random()*100)+501);
}
console.log(numeroAleatorio());
 /**10) Programa una función que reciba un número y evalúe si es capicúa o no 
        (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

function esCapicua(numero){
    let i = 0;
    for(let i=0;i<numero.length;i++){
        if(numero.charAt(i)!=numero.charAt(numero.length-1-i)){
            return false;
        }
    }
    return true;
}   

let result10 = esCapicua(2002);
console.log(result10);
/**    11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
         se define como el producto de todos los números enteros positivos desde 1 hasta n), 
        pe. miFuncion(5) devolverá 120.*/
        
function factorial(numero){
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial *= i;
    }
    return factorial;
}

let result11 = factorial(5);
console.log(result11);

/**
 *  12) Programa una función que determine si un número es primo (aquel que solo 
 *      es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
 */

    function esPrimo(numero){
        if( numero === 1){
            return true;
        }
        for(let i=2;i<numero;i++){
            if((numero % i) === 0){

                return false;
            }
        }
        return true;
    }

    let result12 = esPrimo(7);
    console.log(result12);
 
/**
 *    13) Programa una función que determine si un número es par o 
 *      impar, pe. miFuncion(29) devolverá Impar.
 */
    function esPar(numero){
        if(numero%2===0){
            return "Par";
        }else {
            return "Impar"
        }
    }
    let result13 = esPar(29);
    console.log(result13);
    result13 = esPar(4);
    console.log(result13);

/**
 *    14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
 *     pe. miFuncion(0,"C") devolverá 32°F.
 * para convertir de celsius a fahrenheit Fórmula (1 °C × 9/5) + 32 = 33,8 °F
 * para convertir de fahrenheit a celsius Fórmula(1 °F − 32) × 5/9 = -17,22 °C
 */
    function convertirTemperatura(grados, condicion){
        condicion = condicion.toLowerCase();
        if (condicion === 'c'){
            return (grados * (9/5) +32);
        }else if(condicion === 'f'){
            return (grados -32 ) *5/9;
        }
    }
    
        let result14 = convertirTemperatura(0,"c");
        console.log(result14);
        result14 = convertirTemperatura(0,"f");
        console.log(result14);

/**
 * 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
 *      pe. miFuncion(100,2) devolverá 4 base 10.
   16) Programa una función que devuelva el monto final después de aplicar un descuento 
        a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */
function aplicarDescuento(monto,descuento){
    let montoADescontar = (monto*descuento)/100;;
    return monto-montoADescontar;
}

let result15 = aplicarDescuento(1000, 20);
console.log(result15);

/**
 * 17) Programa una función que dada una fecha válida determine cuantos años han pasado 
        hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

function añosHastaHoy(fecha){
    let hoy = new Date();
    let fechaHoy = new Date(fecha);
    let años = hoy.getFullYear()-fechaHoy.getFullYear();
    return años;
}
let result17 = añosHastaHoy(new Date(1984,4,23));   
console.log(result17);

function contarEdad(fecha){
    let hoy = new Date();
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear()-nacimiento.getFullYear();
    return edad;
}
console.log(contarEdad(new Date(1989,4,10)));