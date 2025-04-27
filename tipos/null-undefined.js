"use strict";
(() => {
    let isActive = undefined;
    console.log(isActive);
    /*  undefined  */
    let nombre; // La variable 'nombre' se declara, pero no se le asigna ningún valor
    console.log(nombre); // Imprime 'undefined'
    /*  null  */
    let persona = null; // La variable 'persona' se inicializa con 'null'
    console.log(persona); // Imprime 'null'
})();
/*
⬆️⬆️🌟Los tipos de datos nulos o no definidos (null y undefined), son valores que el caso #1 permiten definirlo al programador dando a la variuable un valor que no esta definido y por el otro lado undefined que es un valor que aun no se a retornado o definido para una variables en los dos casos son ausencia de valor pero como estan siendo definido es la diferencia.

? - Undefined significa que una variable ha sido declarada, pero no se le ha asignado ningún valor. Es el valor que se le asigna automáticamente a una variable cuando se declara sin inicializar.

? - Uso: undefined se utiliza generalmente para indicar que una variable aún no tiene un valor válido.

! - null representa la ausencia intencional de un valor. Se utiliza para indicar que una variable no tiene un valor válido de manera explícita.

! - Uso: null se utiliza generalmente cuando quieres indicar que una variable no tiene un valor por alguna razón específica.

*/
