function agregar() {
    let texto = document.getElementById("inputTexto").value;
    if (texto) {
        let elemento = document.createElement("p");
        elemento.textContent = texto;
        document.getElementById("contenedor").appendChild(elemento);
        document.getElementById("inputTexto").value = "";
    }
}