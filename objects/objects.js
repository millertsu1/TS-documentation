"use strict";
(() => {
    /* Ejemplo 1: definir un objeto en TS */
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    console.log(flash);
    /* Ejemplo 2: Como crear tipos especificos en TS */
    let spiderman = {
        name: "Peter Parker",
        age: 25,
        powers: ["Trepar muros", "Lanzar telarañas"],
    };
    console.log(spiderman);
    /* Ejemplo 3: Metodos dentro de objetos */
    let batman = {
        name: 'Bruce Wayne',
        age: 35,
        powers: ['Super fuerza', 'Super inteligencia'],
    };
    /* modificamos el objetos batman agregandole un metodo nuevo  */
    batman = {
        name: 'Bruce Wayne',
        age: 35,
        powers: ['Super fuerza', 'Super inteligencia', 'Mucho dinero'],
        getName() {
            return this.name;
        }
    };
})();
/*
!Explicacion ejemplo 1
Los objetos en TS son muy similares a los de JS, pero con la diferencia de que se pueden definir los tipos de las propiedades, ademas esto nos ayuda a tener mas control de las propiedades del objeto.

Ademas podemos definir que propiedades son obligatorias y que propiedades son opcionales, ademas podemos definir que propiedades son solo lectura, etc. Como lo muestra el objeto arriba⬆️

!Explicacion ejemplo 2

Como lo mencionamos anteriormente no deberiamos dejar que TS infiera los tipos que tendran nuestras variables, asi que para poder definir en este caso los objetos debemos tiparlos.

Luego del nombre de la variable debemos poner dos puntos(:), luego el el tipo de dato que tendra, en este caso es un objeto, asi que definimos los con llaves {} y dentro de los corchetes debemos definir las propiedades que tendra el objeto, ademas de que tipo de dato tendran, cada una de las propiedades de este objeto y sus metodos si los usa.⬇️

const spiderman: { name: string, age: number, powers: string[] } = {
}

Cuando nosotros definimos el tipo objeto de esta manera aseguramos y controlamos las propiedades y funcionalidades dentro del objeto definiendolas estrictamente. En el ejemplo estamos definiendo cuantas propiedades tendra nuestro objeto y cuales seran sus tipos, si por alguna razon debemos agregar o cambiar los valores de las propiedades debemos pasar estrictamente el los nuevos valores de acuerdo a sus tipos.(name = string, age = numbre y powers = un array de strings).

!Explicacion ejemplo 3

En este ejemplo estamos definiendo un metodo que nos permitira obtener el nombre del objeto, en este caso el nombre del objeto es batman, por lo tanto cuando llamemos al metodo getName() nos devolvera el nombre de batman.

Aqui estamos agregando al objeto batman un nuevo metodo que es getName() y dentro de este metodo estamos retornando el nombre del objeto, en este caso batman.

Dentro de el tipado del objeto estamos definiendo las propiedades y sus metodos, estos ultimos como inicialmente no estaban definidos cuando se creo el objeto en esa definicion estamos agregando que nuestro metodo dentro del objeto es del tipo funcion, que es opcional que esta funcion es de tipo string ya que recibira este tipo de dato.

*/
