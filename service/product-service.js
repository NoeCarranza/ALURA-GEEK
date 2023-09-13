//FETCH API
const listaProductos = () => 
fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
console.log("hi");

const crearProducto = (url, categoria, nombre, precio,descripcion) =>{
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, nombre, precio,descripcion, id:uuid.v4()}) 
    });
}

const eliminarProducto = (id) => {
    console.log("Eliminar a: ", id);
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`)
    .then((respuesta) => respuesta.json()
    );
};

const editarProducto = (imageURL, categoria, name, price,descripcion,id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({name, imageURL, price, categoria,descripcion,id})
})
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err));
};


const buscarProducto = (name, categoria) => {
    const productosEncontrados = [];
    data.forEach(({ imageURL, name, price, categoria, id }) => {
        if ((name && productName.toLowerCase().includes(name.toLowerCase())) ||
            (categoria && productCategoria.toLowerCase() === categoria.toLowerCase())) {
            productosEncontrados.push({name, price, categoria});
        }
    });
    return productosEncontrados;
};
const tabla = document.getElementById('table');
const productosEncontrados = buscarProducto('Nombre a buscar', 'Categoría a buscar');
productosEncontrados.forEach(({ imageURL, name, price, categoria, id }) => {
    const row = document.createElement('tr');
    table.appendChild(row);
});

export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto,
    buscarProducto
}


