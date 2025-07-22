"use strict";
(() => {
    /* ejercicios de la segunda revision TS repeticion espaciada */
    /* Ejercicio 1 */
    function saludar(nombre) {
        return `Hola ${nombre}`;
    }
    ;
    const saludo = saludar('Juan');
    console.log(saludo);
    /* ejercicio 2 */
    function sumar(num1, num2) {
        return num1 + num2;
    }
    ;
    const resultadoSuma = sumar(5, 3);
    console.log(resultadoSuma);
    /* Ejercicio 3  */
    const esMayorEdad = (edad) => {
        return edad >= 18;
    };
    console.log(esMayorEdad(20));
    console.log(esMayorEdad(15));
    /* Ejercicio 4 */
    const calcularAreaRectangulo = (base, altura) => {
        return base * altura;
    };
    const area = calcularAreaRectangulo(10, 5);
    console.log(area);
    /* Ejercicio 5 */
    const aMayusculas = (texto) => {
        return texto.toUpperCase();
    };
    const textoMayuscula = aMayusculas('hola mundo');
    console.log(textoMayuscula);
    /* Ejercicio 6 */
    function primerElemento(numeros) {
        if (primerElemento.length === 0) {
            return undefined;
        }
        else {
            return [numeros[0]];
        }
    }
    console.log(primerElemento([1, 2, 3, 4, 5]));
    console.log([]);
    /* ejercicio 7 */
    function concatenarNombres(nombre, apellido) {
        return nombre + ' ' + apellido;
    }
    const nombreCompleto = concatenarNombres('Miller', 'Ladino');
    console.log(nombreCompleto);
    /* Ejercicio 8 */
    const calcularDoble = (numero) => {
        return numero * 2;
    };
    console.log(calcularDoble(7));
    /* Ejercicio 9 */
    function verificarContrasena(ingresada, correcta) {
        return ingresada === correcta;
    }
    console.log(verificarContrasena('perro', 'gato'));
    console.log(verificarContrasena('Dios', 'Dios'));
    /* Ejercicio 10 */
    const crearMensaje = (mensaje, prefijo) => {
        if (prefijo) {
            return prefijo + ' ' + mensaje;
        }
        else {
            return mensaje;
        }
    };
    console.log(crearMensaje('Informacion Importante', 'INFO'));
    console.log(crearMensaje('Informacion Importante', ''));
})();
