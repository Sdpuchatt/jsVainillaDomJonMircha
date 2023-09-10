/**
19) Programa una función que valide que un texto sea un nombre válido, 
    pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, 
    pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
    pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
    pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto 
    con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
    pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
    el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
    pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio,
    pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

/**
 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
    pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */

let vocales = 0,
consonantes = 0;
function cantidadVocales(cadena){
  vocales =0;
  consonantes=0;
  for(i = 0; i < cadena.length; i++){
    if(cadena[i]=== 'a' || cadena[i]=== 'e' || cadena[i]=== 'i' || cadena[i]=== 'o' || cadena[i]=== 'u'){
      vocales++;
    }else{
      consonantes++;
    }
  }
}
cantidadVocales('hola');
console.log(vocales);
console.log(consonantes);

cantidadVocales('choque');
console.log(vocales);
console.log(consonantes);

/**
 19) Programa una función que valide que un texto sea un nombre válido, 
    pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */