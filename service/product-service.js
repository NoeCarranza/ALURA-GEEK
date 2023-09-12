//FETCH API
const listaProductos = () => 
fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());


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

const editarProducto = (url, categoria, nombre, precio,descripcion,id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({url, categoria, nombre, precio,descripcion})
})
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err));
};


const buscarProducto = (nombre) => {
    return fetch(`http://localhost:3000/producto?nombre=${nombre}`)
    .then((respuesta) => respuesta.json())
    .catch((error) => {
        console.error('Error al buscar producto:', error);
        throw error;
    });
};

export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto,
    buscarproducto,
}


