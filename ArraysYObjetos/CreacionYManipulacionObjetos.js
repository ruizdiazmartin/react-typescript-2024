const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//El map no manipula el array original, solo puedo manipular un nuevo array tomando el original
//Por cada valor del array original nos retorna un valor, es decir siempre se va a manipular un nuevo array de la misma dimension.
const arrayDuplucadoMap = arrayOriginal.map((arrayOriginal, index) => arrayOriginal * 2);
console.log(arrayDuplucadoMap);

console.log('------------');

//Para obtener un solo valor a partir de un array, usamos el reduce que tampoco altera el array original.
const arraySumaReduce = arrayOriginal.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0);
console.log(arraySumaReduce);

console.log('------------');

//Si queremos manipular el array Original, usamos el foreach
arrayOriginal.forEach((arrayOriginal, index) => arrayOriginal[index] = arrayOriginal[index] * 2);
console.log(arrayOriginal);

console.log('------------');

//Uso el metodo some, si quiero validar que la menos una condicion se cumpla dentro de un array, 
//Nos devuelve un booleano en el resultado
//Tampoco manipulan el array original
console.log(arrayOriginal.some(x => x === 10));

console.log('------------');

//uso el metod every, si quiero validar que todos los elementos cumpla con una condicion.
//Nos devuelve un booleano en el resultado
//Tampoco manipulan el array original
console.log(arrayOriginal.every(x => x === 5));

console.log('------------');