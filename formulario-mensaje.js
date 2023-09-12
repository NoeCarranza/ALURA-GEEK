
var enviarBtn = document.getElementById("enviarMensaje");


enviarBtn.addEventListener("click", function () {
    var mensajeInput = document.querySelector(".contacto__input__mensaje");
    if (mensajeInput.value.trim() === "") {
        alert("Por favor, complete los campos antes de enviar el mensaje.");
    } else {
        alert("Su mensaje ha sido enviado con éxito");
    }
});