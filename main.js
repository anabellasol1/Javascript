let nombre = parseInt(prompt ("Hola, ¿Cuál es tu nombre?"))

alert (`¡Hola ${nombre} ¿Cómo estás?`);

let edad = parseInt(prompt ("¿Cuántos años tenés?"));

if (edad >= 18) {
    alert("¡Genial! Ya podemos proceder a la compra");

    alert ("¿Cuántas bolsas de café vas a pedir? Cada una te sale $1200");

    let cantidad = parseInt(prompt("Ingrese la cantidad"));

    for (let i = 1; i <= cantidad; i++) {

        let gusto = prompt("Ingrese la variedad de café");

        alert(`Solicitó un: ${gusto}`);

    }

    let precio = 1200;

    function multiplicar(n1, n2) {
      resultado = n1 * n2;
    };

    multiplicar(cantidad, precio);

    alert(`El total es $ ${resultado}`);
}
else {
    alert("Lo siento. Necesitás ser mayor de edad.");
}

alert ("¿Con qué medio de pago vas a pagar?");