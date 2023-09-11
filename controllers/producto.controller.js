import { productService } from "../servicios/productos-servicios.js"
console.log(productService);
// Función para crear una nueva línea de producto


const crearNuevaLinea = (imageURL, name, price, id) => {
    const linea = document.createElement("form");
    linea.innerHTML = `
    <form class="nuevo__producto__input__correo" data-form>
    <div class="nuevo__producto__padre">
        <span class="producto__texto__input">URL de imagen</span>
        <input type="text" class="nuevo__producto__input" required="required" data-URL src="${imageURL}">
    </div>
    <div class="nuevo__producto__padre">
        <span class="producto__texto__input">Categoría</span>
        <input type="text" class="nuevo__producto__input" required="required" data-categoria src="${id}">
    </div>
    <div class="nuevo__producto__padre">
        <span class="producto__texto__input">Nombre del producto</span>
        <input type="text" class="nuevo__producto__input" required="required" data-nombre src="${name}">

    </div>
    <div class="nuevo__producto__padre">
        <span class="producto__texto__input">Precio del producto</span>
        <input type="text" class="nuevo__producto__input" required="required" data-precio src="${price}">
    </div>
    <div class="nuevo__producto__padre">
        <span class="producto__texto__input">Descripción del producto</span>
        <input type="text" class="nuevo__producto__input" required="required" data-descripcion>
    </div>
    
    <button class="nuevo__producto__btn">Agregar producto</button>
</form>
    `;
    linea.innerHTML = contenido;
    console.log(linea);
    return linea; // Devuelve el elemento HTML creado
}
/*

const table = document.querySelector("[data-product]");


productService.listaProductos().then((data) =>{
    data.forEach(({imageURL,name,price,id}) => {
        const nuevoProducto = crearNuevaLinea(imageURL,name,price,id);
        table.appendChild(nuevoProducto);
    });
    }).catch((error) => alert("Ocurrió un error"));
    
    

const eliminarProducto = (id) =>{
    console.log("Elimina a: ", id);
}*/