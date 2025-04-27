"use strict";
(() => {
    const names = (firstName, ...restNames) => {
        return `${firstName} ${restNames.join(' ')}`;
    };
    const superman = names('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
/*
⬆️👁️👁️⬆️
En las funciones como vimos en el curso de JS, usabamos la caracteristica REST OPERATOR para pasarle argumentos desconociendo la cantidad de los mismos para esto al definir los parametros usabamos el REST OPERATOR. sin embargo al usar esta funcionalidad en TS, debemos definir el tipo de datos que tendran el resto de estos parametros que solicitamos para que al pasarlos como argumentos podramos usarlos bajo las condiciones de TS.

En nuestro ejemplo como conocemos los demas parametros que solicitaremos para nuestra funcion estamos definiendo el tipo para el primer parametro y para los demas lo hacemos con el REST OPERATOR, en este caso todos los parametros son de tipo String, esto asegura que al pasar los argumentos a la funcion cuando la llamemos aseguremos que sean los tipos especificados cuando la definimos.
*/ 
