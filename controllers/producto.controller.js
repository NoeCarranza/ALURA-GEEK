import { productService } from "../servicios/productos-servicios.js"
console.log(productService);
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


productService.listaProductos().then((data) =>{
    data.forEach(product => {
        const nuevoProducto = crearNuevaLinea(product.imageURL, product.name, product.price, product.id);
        table.appendChild(nuevoProducto);
    });
    }).catch((error) => alert("Ocurrió un error"))
    
    
    