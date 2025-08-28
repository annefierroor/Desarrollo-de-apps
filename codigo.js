function agregar() {
    let texto = document.getElementById("inputTexto").value;

    if (texto) {
    
        let elemento = document.createElement("div");

        let parrafo = document.createElement("p");
        parrafo.textContent = texto;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function () {
            elemento.remove(); 
        };

        elemento.appendChild(parrafo);
        elemento.appendChild(botonEliminar);

        document.getElementById("contenedor").appendChild(elemento);

        document.getElementById("inputTexto").value = "";
    }
}
