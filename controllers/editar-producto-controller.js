import { productosServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]")



const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id ==null ){
        window.location.href= "/error.html"
    }


    const imageURL = document.querySelector("[data-URL]")
    const categoria = document.querySelector("[data-categoria]")
    const name = document.querySelector("[data-nombre]")
    const price = document.querySelector("[data-precio]")
    const descripcion = document.querySelector("[data-descripcion]")



    productosServices.detalleProducto(id).then(producto => {
        imageURL.value = producto.imageURL;
        categoria.value = producto.categoria;
        name.value = producto.name;
        price.value = producto.price;
        descripcion.value = producto.descripcion;
    });
};

obtenerInformacion();


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const imageURL = document.querySelector("[data-URL]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    console.log(imageURL, " - ", categoria, " - ", name, " - ", price, " - ", descripcion);
    productosServices.editarProducto(imageURL, categoria, name, price, descripcion,id).then(() => {
    window.location.href="/edicion-exito.html";
    })
});