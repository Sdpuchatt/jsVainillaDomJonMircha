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
    console.log(aux);
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
