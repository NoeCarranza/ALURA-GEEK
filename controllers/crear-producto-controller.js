import { productosServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = document.querySelector("[data-URL]").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
 //   console.log(url, " - ", categoria, " - ", nombre, " - ", precio, " - ", descripcion);
 //   console.log("formulario");
    productosServices.crearProducto(url, categoria, nombre, precio,descripcion)
    .then(() =>{
        window.location.href="/producto-registrado.html"
        
    })
    .catch(err => console.log(err));
});