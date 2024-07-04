//Defino el tipo y lo inicializo
let nombre = 'Martin';

//Defino el tipo sin inicializar
let direccion: string;

//Defino los tipos que puede recibir esta variable
let apellido: string | undefined = 'Dylan';

let numero: number | boolean | undefined = 3;

let booleano: boolean = false;

let nulo: null = null; 

let indefinido: undefined = undefined;

let array: number[] = [1, 3, 5];

let fecha: Date = new Date();


const persona: {nombre: string, apellido: string, edad?: number, direccion: {calle: string, cp: number}} = {
    nombre: 'Martin',
    apellido: 'Ruiz Diaz',
    direccion: {
        calle: 'Boyaca',
        cp: 1416
    }
};

persona.edad = 45;
    