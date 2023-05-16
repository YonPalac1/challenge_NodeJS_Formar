// Devuelve la cadena zero si el número termina en 0
// Devuelve la cadena five si el número termina en 5
// Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
// Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5

const number_cardinality = (n) => {
    if (n % 10 === 0) {
      return "zero";
    } else if (n % 10 === 5) {
      return "five";
    } else if (n % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }

  console.log(number_cardinality(100))
  console.log(number_cardinality(88))
  console.log(number_cardinality(155))
  console.log(number_cardinality(99))
  console.log(number_cardinality(95))