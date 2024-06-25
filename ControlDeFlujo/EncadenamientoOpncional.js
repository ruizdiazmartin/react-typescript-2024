const persona = {

    nombre: 'Martin',
    direccion: null

};

//Como la propiedad direccion acepta null, no rompre, solo nos da un undefined y no se ejecuta la propiedad ciudad que no exuste.
//Nos sirve para no validar las propiedades que no sabemos que contienen datos y no se rompa la aplicacion
const ciudad = persona.direccion?.ciudad;
console.log(ciudad);