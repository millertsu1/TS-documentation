(()=>{

    const batman: string = 'batman';
    const linternaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Heroe: Volcan Negro`;

    console.log(batman.toLocaleUpperCase());
    console.log(linternaVerde.toLocaleLowerCase());
    console.log(volcanNegro.concat(batman));

})()
/* 
⬆️⬆️Al igual que en los dos anteriores tipo de datos  aqui tambien al no definir el tipo de dato por defecto el que asignara o infiere TS es el tipo ANY que se traduce como cualquier dato. Asi nosotros definimos este tipo de datos contaremos con el catalogo de funciones la ayuda del editor en gestionar los metodos o caracteristicas que  podemos usar del los Strings.
*/