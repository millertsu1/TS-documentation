(()=>{
    /* ejercicios de la segunda revision TS repeticion espaciada */

    /* Ejercicio 1 */

    function saludar(nombre:string): string{
        return `Hola ${nombre}`
    };
    const saludo = saludar('Juan');
    console.log(saludo);

    /* ejercicio 2 */

    function sumar(num1:number, num2:number): number{
        return num1 + num2;
    };
    const resultadoSuma = sumar(5,3);
    console.log(resultadoSuma);

    /* Ejercicio 3  */

    const esMayorEdad = (edad:number): boolean =>{
        return edad >= 18;
    }
    console.log(esMayorEdad(20));
    console.log(esMayorEdad(15));

    /* Ejercicio 4 */

    const calcularAreaRectangulo = (base:number, altura:number): number =>{
        return base * altura
    }
    const area = calcularAreaRectangulo(10, 5);
    console.log(area);

    /* Ejercicio 5 */

    const aMayusculas = (texto:string): string =>{
        return texto.toUpperCase();
    }
    const textoMayuscula = aMayusculas('hola mundo');
    console.log(textoMayuscula);

    /* Ejercicio 6 */

    function primerElemento(numeros: number[]): number[] |undefined {
        if (primerElemento.length === 0) {
            return undefined;
        }else{
            return [numeros[0]];
        }
        
    }
    console.log(primerElemento([1,2,3,4,5]));
    console.log([]);

    /* ejercicio 7 */

    function concatenarNombres (nombre:string, apellido:string): string{
        return nombre + ' ' + apellido;
    }
    const nombreCompleto = concatenarNombres('Miller', 'Ladino');
    console.log(nombreCompleto);

    /* Ejercicio 8 */

    const calcularDoble = (numero:number): number => {
        return numero * 2;
    }
    console.log(calcularDoble(7));

    /* Ejercicio 9 */

    function verificarContrasena (ingresada:string, correcta:string): boolean{
        return ingresada === correcta;
    }
    console.log(verificarContrasena('perro', 'gato'));
    console.log(verificarContrasena('Dios','Dios'));

    /* Ejercicio 10 */

    const crearMensaje = (mensaje:string, prefijo?:string): string =>{
        if(prefijo){
            return prefijo + ' ' + mensaje;
        }else{
            return mensaje;
        }
    }
    console.log(crearMensaje('Informacion Importante', 'INFO'));
    console.log(crearMensaje('Informacion Importante',''));
})()