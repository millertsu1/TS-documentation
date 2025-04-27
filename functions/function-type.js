"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = 10;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Miller'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
/*
⬆️👁️👁️⬆️
Notese que hemos creado 3 funciones en la parte superior, cada una hace una tarea especifica.

Al pasar la funcion y asignarla a otra variables en este caso una llamada myFunction, esta ultima sino especificamos su tipo va a tener asignado por default ANY, asi que las funciones de arriba apesar de que tengan tipo al ser asigandas no importara porque estamos dejando que TS infiera el tipo de la ultima que es la que se esta ejecutando con tipo de dato ANY.

Recordemos que no debemos en lo posible dejar que TS infiera o asigne el tipo de dato, nosotros debemos definirselo, asi que para arreglarlo debemos de asignarle el tipo a la funcion. Alli es donde podemos asignar el tipo FUNCTION el cual permitira que reciba otras funciones y conservara los tipos de la funcion que le llegue.

Asi las 3 funciones que creamos arriba se pueden ejecutar sin problemas ya que cumplen con el tipo de dato que se le asigno a la variable myFunction

Pero tambien podemos asignarle el tipo de dato que queramos, por ejemplo si queremos que solo acepte funciones que retornen numeros podemos hacerlo de la siguiente manera:

let myFunction: (a:number, b:number) => number;

*/ 
