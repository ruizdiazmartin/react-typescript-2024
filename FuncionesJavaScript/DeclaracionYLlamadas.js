const result = (function(a, b) {
    return a + b;
})(2, 3); //En estos parentecis se les envia los parametros a la misma funcion y ademas hace que se ejecute inmediatamente sin ser invocada

console.log(result);  // Imprime: 5


//Funcion anomina es cuando no tiene nombre y se la puede asignar a una variable por ejemplo.
const funciionAnonimia = function () {
    return console.log('Esta funcion es anonima porque no tiene nombre');
};

funciionAnonimia();

//Arrow function
const arrowFunction = () => { return console.log('Es una funcion ArrowFuncton')};

console.log(arrowFunction());