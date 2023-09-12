import { productosServices } from "../service/product-service.js";

const formBusqueda = document.querySelector("#form-busqueda");
const inputBusqueda = document.querySelector("#input-busqueda");

formBusqueda.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = inputBusqueda.value.trim();

    if (nombre === "") {
        // Realiza alguna acción para manejar la entrada vacía
        return;
    }

    buscarProducto(nombre)
        .then((productos) => {
            // Aquí puedes mostrar los resultados de la búsqueda en tu página
            console.log("Resultados de la búsqueda:", productos);

            // Por ejemplo, puedes crear elementos HTML para mostrar los resultados
            // en una lista en tu página
            const resultadosLista = document.querySelector("#resultados-lista");
            resultadosLista.innerHTML = "";

            if (productos.length === 0) {
                resultadosLista.innerHTML = "No se encontraron productos.";
            } else {
                productos.forEach((producto) => {
                    const itemProducto = document.createElement("li");
                    itemProducto.textContent = `Nombre: ${producto.nombre}, Precio: $${producto.precio}`;
                    resultadosLista.appendChild(itemProducto);
                });
            }
        })
        .catch((error) => {
            // Maneja el error de búsqueda aquí
            console.error("Error al buscar producto:", error);
        });
});
