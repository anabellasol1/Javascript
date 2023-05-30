const productos = [
    { id: 1, art: "flat white", precio: 1200 },
    { id: 2, art: "capuccino", precio: 1300 },
    { id: 3, art: "latte", precio: 1100 },
    { id: 4, art: "expreso", precio: 900 },
];

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const edad = parseInt(prompt("¿Cuántos años tenés?"));

const usuario = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
};

console.log(usuario);

if (edad >= 18) {
    alert("¡Genial! Ya podés acceder a los precios de nuestros cafés");

    alert(`Trabajamos estos tipos de cafés:
    - Flat white
    - Capuccino
    - Latte
    - Expreso`);

    let art = prompt("Ingrese el tipo de café del cual quiere saber el precio:").toLowerCase();

    const encontrado = productos.find(item => item.art.includes(art));

    if (encontrado) {
        let mensaje = `
    Tipo de café: ${encontrado.art}
    Precio: $ ${encontrado.precio}
    `;

        alert(mensaje);
    } else {
        alert("Producto no encontrado");
    }
}
else {
    alert("Lo siento. Necesitás ser mayor de edad.");
}

const mediosDePago = [
    { medio: "efectivo", descuento: "Tiene un descuento del 10%" },
    { medio: "tarjeta debito", descuento: "No hay descuento"},
    { medio: "tarjeta credito", descuento: "Tiene un recargo del 15%" },
    { medio: "transferencia", descuento: "Tiene un descuento del 15%" },
];

let medio = prompt ("Tenemos promociones con algunos medios de pago. ¿Cuál utilizas usualmente?").toLowerCase();

const hallado = mediosDePago.find(item => item.medio.includes(medio));

if (hallado) {
    let info = `
Medio de pago: ${hallado.medio}
Promoción: ${hallado.descuento}
`;

    alert(info);
} else {
    alert("No tenemos esa forma de pago");
};

