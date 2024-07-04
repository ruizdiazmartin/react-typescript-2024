function operacionAsincronica(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const exito = true;
            if(exito)
                resolve('Ok')
            else
                reject('wrong');
        }, 1000)
    })
};

console.log('Inicio');

operacionAsincronica() //Promesa asincronica
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))
    .finally(() => console.log('Finalizado'));

console.log('Fin');