import { productosServices } from "../service/product-service.js"
console.log("hi");

const crearProducto = (imageURL, name, price,categoria, id) => {
    const linea = document.createElement("div");
    const contenido = `
    <img class="insumos__imagenes" src="${imageURL}">
    <div class="boton__container">
        <a id="${id}"><img src="assets/delete_black_24dp (1) 1.svg" class="boton__eliminar" style="width: 24px"></a>
        <a href="/editar-producto.html?id=${id}" ><img src="assets/edit_black_24dp 1.png" class="boton__editar" style="width: 24px"></a>
    </div>
    <h2 class="insumos_descripcion">${name}</h2>
    <h2 class="insumos__precio">$${price}</h2>
    <p>${categoria}</p>`;
    linea.innerHTML = contenido;
    const btnBorrar = linea.querySelector("a")
    btnBorrar.addEventListener("click", () =>{
        const id = btnBorrar.id;
        productosServices.eliminarProducto(id).then(respuesta =>{
            console.log(respuesta)
        }).catch(err => alert("Ocurrió un error"));
        
    });
    return linea;
};

const table = document.querySelector("[data-table]");
productosServices.listaProductos().then((data) => {
    console.table(data);
    data.forEach(({imageURL,name,price,categoria,id}) => {
        const agregarNuevo = crearProducto(imageURL, name, price, categoria, id);
        table.appendChild(agregarNuevo);
    });
}).catch((error) => alert("Ocurrió un error"));


// const buscarProducto = (name, categoria) => {
//     const productosEncontrados = [];
//     data.forEach(({ imageURL, name, price, categoria, id }) => {
//         if ((name && productName.toLowerCase().includes(name.toLowerCase())) ||
//             (categoria && productCategoria.toLowerCase() === categoria.toLowerCase())) {
//             productosEncontrados.push({name, price, categoria});
//         }
//     });
//     return productosEncontrados;
// };
// const tabla = document.getElementById('table');
// const productosEncontrados = buscarProducto('Nombre a buscar', 'Categoría a buscar');
// productosEncontrados.forEach(({ imageURL, name, price, categoria, id }) => {
//     const row = document.createElement('tr');
//     table.appendChild(row);
// });
