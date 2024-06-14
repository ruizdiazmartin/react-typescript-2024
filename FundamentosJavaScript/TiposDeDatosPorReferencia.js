//Object
//Arrays
//Function

const persona = {
    nombre: 'Martin',
    apellido: 'Ruiz Diaz',
    direccion: {
        callle: 'Boyaca',
        CP: '1416'
    },
    presentarse: function(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }
};

//console.log(persona.nombre, persona.apellido, persona.direccion.callle, persona.direccion.CP, persona.presentarse());

console.log(persona.nombre, persona.apellido, persona.direccion.callle, persona.direccion.CP, persona.presentarse());