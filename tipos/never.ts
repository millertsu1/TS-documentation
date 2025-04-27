(()=>{

    const error = (message: string):never =>{
        throw new Error(message)
    
    }
    error('Auxilio!')
    console.log('aqui continua');
})()

/* 
⬆️⬆️El tipo de dato never es un tipo de dato que nunca va a retornar un valor.
Es decir, que nunca va a terminar de ejecutarse.

los usos mas comunes son:
1. Cuando se lanza un error
2. Cuando se retorna un valor que nunca va a retornar un valor.

- never es un tipo de dato en TypeScript que representa un valor que nunca ocurre.
- Se utiliza principalmente en funciones que nunca retornan y en tipos que no tienen instancias.
- Ayuda a mejorar la seguridad de tipos y la claridad del código.
*/