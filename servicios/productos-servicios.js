//fetch api
const listaProductos = () => fetch("http://localhost:3000/producto").then (respuesta => respuesta.json());

const crearProducto = (url, categoria,nombre,precio,descripcion) =>{
    return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({url, categoria, nombre, precio, descripcion, id: uuid.v4()})
})
.then(response => {
    if (!response.ok) {
        throw new Error("Error al realizar la solicitud.");
    }
    return response;
})
.catch(error => {
    console.error("Error:", error);
});
}

export const productService = {
    listaProductos,
    crearProducto,
};
