// Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de todos los dígitos del entero. La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario.

// *
// Imagine un número entero no negativo, digamos 34315. Cada dígito en el número entero tiene un llamado rango de visión . El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, puede 3 "ver" 3 dígitos a cada lado de sí mismo. En nuestro ejemplo, puede mirar a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. El rango de visión de cada dígito es su propio valor.

// Ahora bien, el rango de visión de un dígito define el llamado valor de visión, que es la suma de los dígitos dentro del rango de visión. Entonces, el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 4 el valor de visión es 3+3+1+5=12.

const range_vision = (n) => {
  let result = false;

  if (n > 0) {
    let parseString = n.toString();

    console.log("NUMERO: ", n);

    for (let i = 0; i < parseString.length; i++) {
      let digit = parseString.charAt(i);
      let seeLeft = "";
      let seeRight = "";
      let refNumber = Number(digit);

      console.log("Digito: ", digit);

      // ver a la derecha
      for (j = i + 1; j < i + 1 + refNumber; j++) {
        seeRight += parseString.charAt(j);
      }
      if (i + 1 === parseString.length) {
        seeRight = "-";
      }

      // ver a la izquierda
      let refIndex = 0;
      for (let l = i; l >= 0; l--) {
        refIndex++;
        if (i === 0) {
          seeLeft = "-";
          break;
        }
        if (refIndex <= refNumber) seeLeft += parseString.charAt(l - 1);
      }
      seeLeft = seeLeft.split("").reverse().join("");

      //   Sumar los digitos
      let rightDigits = seeRight.split("").map(Number);
      let rightSum = rightDigits.reduce((a, b) => a + b, 0);

      let leftDigits = seeLeft.split("").map(Number);
      let leftSum = leftDigits.reduce((a, b) => a + b, 0);

      if (isNaN(leftSum)) leftSum = 0;
      if (isNaN(rightSum)) rightSum = 0;

      let value = leftSum + rightSum;

      console.log("Puede ver a la izquierda: ", seeLeft);
      console.log("Puede ver a la derecha: ", seeRight);
      console.log("Valor de la vision: ", value);

      result = true;
    }
  }
  return result;
};

range_vision(3516542789);
