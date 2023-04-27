let nombre = prompt("Ingrese su nombre por favor");
alert(`¡Hola ${nombre}! Espero te encuentres muy bien`);

let edad = prompt("¿Qué edad tenés?");

if (edad >= 18) {
    alert("¡Genial! Cada cerveza está $1200, ¿Cuántas cervezas te preparamos?")

    let cantidad = prompt("Ingrese la cantidad");

for (let i = 1; i <= cantidad ; i++){

let gusto = prompt("Ingrese la variedad de cerveza");

alert(`Solicitó una: ${gusto}`);

}

let precio = 1200;

function multiplicar (n1, n2){
    resultado = n1 * n2;
};

multiplicar (cantidad, precio);

alert (`El total es $ ${resultado}`);
}
else {
    alert("Lo siento. Necesitás ser mayor de edad.")
}