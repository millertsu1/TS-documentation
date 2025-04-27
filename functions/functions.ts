(()=>{


    /* ejemplo 3 */

    function suma(a:number, b:number):number {
        return a + b;
    }
    console.log(` la suma es: `, suma(1,2));

    /* ejemplo 4 */

    const suma2 = function(a:number, b:number):number {
        return a + b;
    } 
    console.log(` la suma es: `, suma2(5,4));

    /* Ejemplo 5 */

    const dividir = (a:number, b:number): number => {
        return a/b;
    }
    console.log(` la suma es: `, dividir(9,2));

})()

/* 
En TS las funciones tambien deben tener un tipado, y debemos saber que las para todos los tipos de funciones el funcionamiento del tipado debe ser obligatorio. sin importar si son anonimas, las clasicas o incluso funciones flecha.

En declaraciones de funciones, los tipos se especifican  de forma explicita para los parametros y el valor de retorno, como  se muestra en el ejemplo 3 arriba.⬆️

En funciones expresadas, los tipos se infieren de forma implicita por TS, y no es necesario especificarlos explicitamente, como se muestra en el ejemplo 4, Aqui el matiz esta en la sintaxis de la funcion y no en como TS trabaja.⬆️

Finalmente las funciones de flecha solo varian en como estas son escritas pero aplica el tipado para los parametros y para el retorno de la funciona, como el los otros dos casos anteriores, ver el ejemplo 5 arriba ⬆️

Notese que para todas las funciones se puede especificar el tipo de retorno, aunque no es necesario, ya que TS puede inferirlo de forma implicita. Pero es recomendable no dejar que TS infiera nada del codigo. Tambien notese que la sintaxis de las funciones flecha, es donde mas varia pero que no se relaciona estrictamente con TS, sino en como se escriben las funciones.

*/