(()=>{

    function saludar(nombre: string): void{
        console.log(`Hola ${nombre}`)
    
    }

})()

/* 
⬆️⬆️El tipo de dato void representa la ausencia de un valor especifico, el uso mas comun esta en la funciones que no retornan un valor.

En el caso mostrado en el ejemplo, la funcion saludar no retorna ningun valor, por lo que su tipo de retorno es void.

El programador debe reconocer en su saber que la funcion no retornara ningun tipo de valor y por lo tanto crear la funcion con este tipo de valor definido.

- void es un tipo de dato en TypeScript que representa la ausencia de un valor.
- Se utiliza principalmente en funciones que no devuelven ningún valor.
- Ayuda a definir claramente el comportamiento de las funciones y mejora la legibilidad del código.
*/