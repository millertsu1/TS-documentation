"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5];
    const frutas = ['manzana', 'pera', 'uva'];
    const numbersLetters = [1, 'dos', 3];
    numbers.push(11);
    frutas.push('mango');
    numbersLetters.push('cinco');
    numbersLetters.push(6);
    numbersLetters.push('siete');
    console.log(numbers);
    console.log(frutas);
    console.log(numbersLetters);
})();
/*
⬆️⬆️En el caso de los los arreglos, no es necesario indicar el tipo de dato que va a recibir, ya que este se infiere de manera automatica, pero deberiamos usarlo ya que nos permite indicar estrictamente que tipo de dato usaremos e indica como esta construido el arreglo. Es bien sabido que un array puede contener varios tipos de datos internamente. Pero es muy extrano usar esta combinacion de datos en un arreglo. La sintaxis varia  al asignar implicitamente el tipo de datos en un arreglo y requiere especificarle al tipo de datos  que sera un arreglo 'numbers: number[]', lo mismo para los demas tipos de arreglos.
*/ 
