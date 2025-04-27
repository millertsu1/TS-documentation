(()=>{
    
    const hero: [string, number, boolean] = ['Hulk', 1500, true];

    hero[0] = 'joselito';
    hero[1] = 100;
    hero[2] = false;

    //notese que los valores de las nuevas posiciones son los que le explicitamente le asignamos al declarar la tupla

   /*  hero[0] = true;
    hero[1] = 'hola';
    hero[2] = 1000;
 */
    //Sin embargo si reasignamos los valores que implicitamente dimos a los valores de los tipos de la tupla al definirlos estos nos mostrarar un error ya que estamos cambiando el tipo de dato para cada tipo ya predefinido.
})()

/* 
⬆️⬆️Las tuplas las podemos definir como un tipo array normal como los que hasta ahora hemos manejado en JS, sin embargo al usarlas dentro de TS, veremos que las los que estamos haciendo es explicitamente y estrictamente usar los tipos de datos que deberia tener este arreglo(tupla), por cada dato del mismo, asi : en la primero posisicion del arrays definimos que el tipo de dato sera un boolean, luego un number y finalmente un string y que en este orden se debe suministrar los datos y asi mismo usarlos en el programa. 
*/