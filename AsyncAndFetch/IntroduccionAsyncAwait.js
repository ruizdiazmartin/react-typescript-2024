function hacerAlgoAsincronico(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('Hacer algo que ha ocupado un tiempo...');
            const exito = false;
            if(exito)
                resolve('Exito')
            else
                reject('Fallo');
        }, 2000)
    })
};

async function ejecutarTareaAsincronica(){
    try {
        console.log('Iniciando');

        let resultado = await hacerAlgoAsincronico();
        console.log(resultado);

    } catch (error) {

        console.log(error); 

    }finally{

        console.log('Finalizado');
    }
};

ejecutarTareaAsincronica();


console.log('3');
ejecutarTareaAsincronica();
console.log('4');