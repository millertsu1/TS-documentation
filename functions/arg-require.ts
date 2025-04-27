(()=>{

    /* Ejemplo 1 */

    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;   
    }

    const name = fullName('Tony', 'Stark');
    console.log(name);
    
    /* ejemplo 2 */

    const location = (city: string, country: string): string => {
        if(!city || !country) throw new Error('City and country are required');

        return `${city}, ${country}`;
    }
    const city = location('New York', 'USA');
    console.log(city);
})()

/* 
⬆️⬆️👁️👁️Al colocar a los parametros un tipado en TS, especificar aparte del tipo la obligatoriedad de incluirlo al llamar a la funcion, asi que al pasarle los argumentos a la funcion si la misma me  pide  como en el ejemplo el nombre y el apellido, debemos incluirlos, pero ademas debemos incluirlos teniendo en cuenta el tipo de dato con los cuales se parametrizo.
Si no se incluyen los argumentos, nos dara un error.

Por lo tanto se infiere que si en nuestra funcion nosotros usamos TS, ya estaremos validando los desde la parametrizacion y no dentro del cuerpo de la funcion. Esto nos quita el paso adicional de la validacion. En el ejemplo 2 vemos como deberiamos validar si el dato viene o no, este es precisamente el paso adicional que nos ahorrariamos ya que estamos validadando el la parametrizacion y no en el cuerpo de la funcion.
*/