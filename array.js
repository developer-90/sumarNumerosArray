
function sumarDos(numeros, resultado){
    //Recorrer el array
    for(let i=0; i < numeros.length; i++){
        
        // Calcular el segundo numero
        let primerNumero = numeros[i];
        let segundoNumero = resultado - primerNumero;

        // Comprobar si existe un segundo numero que sumado al actual sea igual al resultado y
        //que la variable segundoNumero tiene un valor distinto al valor actual del primero
        if(numeros.includes(segundoNumero) && segundoNumero!= numeros[i]){

            // Si se cumple, devuelve un array con el numero actual y el numeroSegundo calculado
            let resultado = [primerNumero, segundoNumero];
            console.log(resultado);
            return resultado;
        }
    }
}

sumarDos([3, 7, 8, 2], 10); // [3, 7]
sumarDos([4, 5, 9, 1], 10); // [9, 1]
sumarDos([1, 2, 3, 4], 5); // [1, 4]