"use strict";
(() => {
    let avenger = 123;
    avenger = 'Dr Strange';
    avenger = true;
    let exists;
    let power;
    avenger = 'Hulk';
    console.log(avenger.charAt(0));
    avenger = 123.5677887978;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
/*
⬆️⬆️Al tratar a un dato y definirlo con el tipo ANY estamos indicando que puede tener cualquier tipo de valor, asi que de acuerdo a este dato podemos reasignarlo mas adelante en nuestro codigo, que para el ejemplo es number al definirlo, y lo reasignamos como string y number los dos siguientes ocasiones en el codigo.

En el caso de las otras variables, estamos tambien declararandolas pero no inicializandolas, por lo que al momento de imprimir en consola nos marcaran como undefined, ya que no se les ha asignado ningun valor, adicional a esto las mismas estan tomando el tipo de dato ANY automaticamente.
*/ 
