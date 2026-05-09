



function mostrarHora() {
    const ahora = new Date(); // Obtiene fecha y hora actual
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Añadir cero a la izquierda si son menores a 10
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const horaCompleta = `${horas}:${minutos}:${segundos}`;

    // Suponiendo que tienes <div id="reloj"></div>
    document.getElementById('reloj').innerText = horaCompleta;
}

// Ejecutar cada segundo
setInterval(mostrarHora, 1000);



document.getElementById('links').addEventListener('click', () => {
    window.location.href = "./links.html"
});


document.getElementById('cell').addEventListener('click', () => {
    window.location.href = "./cell.html"
});


document.getElementById('home').addEventListener('click', () => {
    window.location.href = "./index.html"
});
















































/*

let arreglo = [22341, -2, 124323, 12, -12, 13453532453252, 312];

function MayoryMenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];

    for (i of arr) {
        menor = menor < i ? menor : i;
        mayor = mayor > i ? mayor : i;
    }
    return [`menor: ${menor}, mayor: ${mayor}`];
}

let devuelta = MayoryMenor(arreglo);
console.log(devuelta);

*/


