

document.addEventListener("DOMContentLoaded", function () {
    var enviarBtn = document.querySelector(".login__btn"); 

    enviarBtn.addEventListener("click", function () {
        var emailInput = document.querySelector(".login__correo");
        var passwordInput = document.querySelector(".login__input__contraseña");

        var email = emailInput.value.trim();
        var password = passwordInput.value.trim();

        if (email === "" || password === "") {
            alert("Por favor, complete todos los campos.");
        } else {

            if (!isValidEmail(email)) {
                alert("Por favor, ingrese una dirección de correo electrónico válida.");
            }
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

