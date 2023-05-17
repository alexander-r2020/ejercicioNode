// Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:
// Devuelve la cadena zero si el número termina en 0
// Devuelve la cadena five si el número termina en 5
// Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
// Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
// Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas.

// Ejemplos:

// Input: 100
// Output: zero

// Input: 88
// Output: even

// Input: 155
// Output: five

// Input: 99
// Output: odd

const number_cardinality=(numero)=>{
    let zero = "zero";
    let five = "five";
    let even = "even";
    let odd = "odd";

    let ultimoNumero = numero.toString().slice(-1);

    if(+ultimoNumero === 0){
        return zero;
    }
    if(+ultimoNumero === 5){
        return five;
    }
    if(numero % 2 == 0 && +ultimoNumero !== 0){
        return even;
    }
    if(numero % 2 !== 0 && +ultimoNumero !== 5){
        return odd;
    }

}
console.log(number_cardinality(100));
console.log(number_cardinality(88));
console.log(number_cardinality(155));
console.log(number_cardinality(99));