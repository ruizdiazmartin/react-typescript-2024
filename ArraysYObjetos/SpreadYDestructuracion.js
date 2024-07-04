//El metodo Spread se una para obtener el contenido de un array sin referirlo con los ... y tambien se puede utilizar con objetos.
//Ademas se puede fucionar el contenido de dos o mas array distintos.
const array1 = [2,4,6,8];
const array2 = [4, 7, 5, 90];

//Push uso para agregar valores a un array
array1.push(50, 9);

const arraySpread = [...array1, ...array2];

console.log(arraySpread);

console.log('------------');

//Spread en un objeto
const estudiantes = {
    calificaciones: [1, 5, 6, 9],
    faltas: 5,
    nombre: 'Dylan'
};

const persona = {
    nombre: 'Martin',
    edad: 43,
    apellido: 'Ruiz Diaz'

};

//Para obtener todas las propiedades de la clase (estudiantes y persona)
//Si se llega a repetir una propiedad como nombre en ambas clases, siempre va a tomar el ultimo que se agrego.
//Tambien me puedo traer las propiedades que deseo y no todas.
const hibrido = {
    ...estudiantes,
    nombre: persona.nombre,
    edad: persona.edad
};

console.log(hibrido);

console.log('------------');


//Destructuracion (es para obtener solo las propiedades que deseo de una clase)

//Funcion sin destructuar
function presentarEstudianteSinDestructurar(estudiantes){
    console.log(`Hola soy ${estudiantes.nombre} y tengo ${estudiantes.edad}`);
};

//Funcion con destructuaracion
function presentarEstudianteConDestructuracion(estudiantes){

    //Destructuro las propiedades nombre y edad de la entidad estudiantes.
    const {nombre, edad} = estudiantes;
    console.log(`Hola soy ${nombre} y tengo ${edad}`);
};

console.log(presentarEstudianteSinDestructurar(hibrido), presentarEstudianteConDestructuracion(hibrido));
