const nuevoProducto = (name, imageURL, price, id)=>{
    const card = document.createElement("div")
    const contenido = ` 
    <div class="insumos__producto__starwars">
    <img class="insumos__imagenes" src=${imageURL}>
    <h1 class="insumos_descripcion">${name}</h1>
    <h1 class="insumos__precio">$${price}</h1>
    <a class="insumos__ver__producto" href="producto.html id=${id}">
        <h1 class="">Ver producto</h1>
    </a>
</div>`
card.innerHTML = contenido
card.dataset.id = id
return card
}

const productos = document.querySelector("[data-product]")