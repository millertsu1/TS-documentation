(()=>{
    /* Ejercicio 1 */
    const concatenar = (base:string, extra?:string): string => {
        if(extra){
            return base + ' ' + extra;
        }else{
            return base;
        }
    }
    console.log(concatenar('recetas'));
    console.log('recetas','organicas');

    /* Ejercicio 2 */

    function calcularArea(ancho:number, alto:number, unidad:string = 'metros cuadrados'): number | string  {
        const resultado = ancho * alto;
        return `El area es: ${resultado} ${unidad}`
    }
    console.log(calcularArea(5,2));
    console.log(calcularArea(5, 2, 'centimetros cuadrados'));


    /* Ejercicio 3 */

    function sumarValores(inicial:number = 0, ...restArgs:number[] ): number{
        let firstNumber = inicial;
        for (let num of restArgs) {
            firstNumber += num;
        }
        return firstNumber;
    }
    console.log(sumarValores(1, 2, 3, 4, 5));

    /* Ejercicio 4 */

    const obternerInfoUsuario = (nombre:string, edad?:number):string => {
        if(edad){
            return `Nombre: ${nombre}, Edad: ${edad}`;
        }else{
            return `Nombre: ${nombre}`;
        }
    }

    console.log(obternerInfoUsuario('Miller'));
    console.log(obternerInfoUsuario('Lady', 36));

    /* Ejercicio 5 */

    const multiplicarPorFactor = (valor:number, factor:number = 2): number => valor * factor;

    console.log(multiplicarPorFactor(5,2));
    console.log(multiplicarPorFactor(3));

    /* Ejercicio 6 */

    function registrarEvento(tipo:string, ...detalles:string[]): void {
        console.log(`evento: ${tipo}`);
        for(const item of detalles){
            console.log(`detalle: ${item}`);
        }
    }
    registrarEvento('fiesta fin de 2025');
    registrarEvento('halloween','disfrases', ' pedir dulces', ' ir a la fiesta');

    /* Ejercicio 7 */

    const formatearNombre = (primerNombre: string, apellido:string, segundoNombre?:string): string => {
        if(segundoNombre){
            return `${primerNombre} ${segundoNombre} ${apellido}`;
        }else{
            return `${primerNombre} ${apellido}`;
        }
    }
    console.log(formatearNombre('Miller', 'Ladino'));
    console.log(formatearNombre('Laura', 'Quintero', 'Camila'));

    /* Ejercicio 8 */

    const calcularPromedio = (nombreIndicador: string, ...valores:number[]): number | string => {
        if(valores.length === 0){
            return `No hay valores para calcular el promedio de ${nombreIndicador}`;
        }else{
            let suma = 0;
            for(const valor of valores){
                suma += valor;
            }
            const promedio = suma / valores.length;
            return `El promedio de ${nombreIndicador} es ${promedio}`;
        }
    }
    console.log(calcularPromedio('visitas'));
    console.log(calcularPromedio('vistas', 300, 200, 345, 890, 998));

    /* Ejercicio 9*/

    function crearURL (dominio:string, protocolo:string = 'https://'): string {
        return `${protocolo}${dominio}`;
    }

    console.log(crearURL('fokiucode.com'));
    console.log(crearURL('abtutorship.com', 'http://'));

    /* Ejercicio 10 */

    const procesarItems = (items:string[], accion?:(item:string) =>void): void =>{
        for(const item of items){
            if(accion){
                accion(item);
            }else{
                console.log(item);
            }
        }
    }
    procesarItems(['pan','queso', 'huevos', 'leche']);
    procesarItems(['pan','queso', 'huevos', 'leche'], item => console.log('procesando', item));
})()