class Persona {
    
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;

    }
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }  
};

const people = new Persona('Martin', 43);

console.log(people.saludar());

//Declaro una interfaz del tipo Persona, las interfaces no se pueden instanciar.
/*interface IPersona {
    direccion: string;
    Cp: number;
    Residencia(): void;
}

const personaCivil: IPersona = {
    direccion: 'Boyaca 1145',
    Cp: 1416,
    Residencia: function(){
        console.log(`Hola, vivo en ${this.direccion} y el codigo postal es ${this.Cp} `);
    },
    //Si quiero acceder a una propiedad de la clase Estudiantes que hereda de Persona, 
    //no me va a permitir porque no cumple con el contrato de la IPersona.
    //curso: 'Ingles'
};

//Heredo de la clase Persona
class Estudiante extends Persona {

    //Propiedad de la clase Estudiante
    curso: string;

    constructor(nombre: string, edad: number, curso: string){

        //Con el metodo super, accedemos a las propiedades de la clase heredada, en este caso es Persona.
        super(nombre, edad);

        //con this accedemos a las propiedades dentro de la clase que las declaramos, en este caso, es solo la propiedad curso.
        this.curso = curso;

    }
    estudiar(): void{
        console.log(`Estoy estudiando ${this.curso}`);
    }
};

//Puedo heredar una interfas tambien
class Profesor implements IPersona{
    direccion: string;
    Cp: number;

    constructor(direccion: string, Cp:number){
        this.direccion = direccion;
        this.Cp = Cp;
    }
    Residencia(): void {
        console.log(`Hola, vivo en ${this.direccion} y el codigo postal es ${this.Cp} `);
    }
};

//Las interfaces se crean para saber que propiedas y metodos deben implementar la clase que hereda de dicha interface.
//Pero no nos interesa que realiza cada propiedad o metodo de la interface, solo para asegurarnos que esten en la clase que se crea. */