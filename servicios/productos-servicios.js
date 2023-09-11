// Función para crear una nueva línea de producto
const crearNuevaLinea = (imageURL, name, price, id) => {
    const linea = document.createElement("div");
    linea.innerHTML = `
        <img class="insumos__imagenes" src="${imageURL}">
        <h1 class="insumos_descripcion">${name}</h1>
        <h1 class="insumos__precio">$${price}</h1>
        <a class="insumos__ver__producto" href="producto.html" id="${id}">
            <h1 class="">Ver producto</h1>
        </a>
    `;
    return linea; // Devuelve el elemento HTML creado
}

const table = document.querySelector("[data-product]");

const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/producto");

http.send();

console.log(http);

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);
    data.forEach(product => {
        const nuevaLinea = crearNuevaLinea(product.imageURL, product.name, product.price, product.id);
        table.appendChild(nuevaLinea);
    });
};



