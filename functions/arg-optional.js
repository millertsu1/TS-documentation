"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
    console.log(name);
})();
/*
Los parametros opcionales podemos definirlos dentro del los parentesis luego del parentesis y antes  del tipo osea entre el nombre del parametro y los dos puntos(:) con el simbolo de interrogacion de cierre (?).

Si notamos hemos modificado la funcion anterior para poder ver los parametros opcionales y cuando damos los  argumentos a la funcion en la parte baja vemos que solo pasamos el nombre pero no el apellido ya que este lo hemos dejado como opcional, asi no tendremos problema porque estamos haciendo opcional este dato que pedimos y es opcional al recibirlo.
*/ 
