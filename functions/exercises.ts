(()=>{

    /* ejercicio 1 */

    function obtenerSaludo (): String {
        return 'Hola desde TypeScript!'
    }
    const miSaludo = obtenerSaludo()
    console.log(miSaludo);

    /* ejercicio 2 */

    const calcularAreaRectangulo = (base:number, altura:number): number =>{
        return base * altura
    }
    const area = console.log(calcularAreaRectangulo(8, 3)); 

    /* ejercicio 3 */

    const mostrarFechaActual = ():void =>{
        console.log(new Date());
    }
    mostrarFechaActual()

    /* ejercicio 4 */

    const par = (numero:number): boolean => {
        return numero % 2 === 0
    }
    const esPar = console.log(par(4));
    const esImpar = console.log(par(5));

    /* ejercicio 5 */

    const concatenarCadenas = (cadena1:string, cadena2:string) => {
        return cadena1 + cadena2
    }

    const concatenar =concatenarCadenas('bienvenido', 'buenas tardes');

    console.log(concatenar);
    // el tipo inferido de la anterior funcion es String, que por lo general es el valor de retorno de la funcion.

    /* ejercicio 6  */

    function sumarNumerosInferido (a:number, b:number){
        return a + b
    };
    const sumarNumerosExplicito = (a:number, b:number): number => {
        return a + b
    };
    const sumar = sumarNumerosInferido(2, 3);
    console.log(sumar);
    const sumar2 = sumarNumerosExplicito(2, 3);
    console.log(sumar2);

    /* A pesar de que las dos funciones gestion al final el mismo valor es mejor dar de manera explicita cual sera el tipo del valor de retorno o indicar el tipo de funcion que al final regresara el codigo con el resultado esperado. */

    /* ejercicio 7 */

    const nombreHeroe: string = 'superman';

    function presentarHeroe ():string {
        return `Bienvenido ${nombreHeroe}`
    }

    const presentar = presentarHeroe();
    console.log(presentar);

    /* ejercicio 9 */

    const obtenerEdadIncorrecta = (): number => {
        return 'diecinueve'
    }
    /* Typescript nos indica que el valor retornado es un string y que la funcion es un number por lo tanto no puede ser recibido */

    /* ejercicio 10 */
    const describirPersona = (nombre:string, edad:number): string => {
        return `${nombre} tiene ${edad} años`
    }
    const descripcion = describirPersona('Juan', 25);
    console.log(descripcion);
})()