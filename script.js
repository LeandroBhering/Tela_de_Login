var btnEntrar = document.getElementById('entrar')
var btnCadastre = document.getElementById('cadastre')
var body = document.querySelector("body")

btnEntrar.addEventListener("click", function () {
    body.className = "entrar-js"
})

btnCadastre.addEventListener("click", function () {
    body.className = "cadastre-js"
})