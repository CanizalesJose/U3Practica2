document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");
    const mens0 = document.getElementById("mens0");
    const mens1 = document.getElementById("mens1");
    const mens2 = document.getElementById("mens2");
    const mens3 = document.getElementById("mens3");
    const mens4 = document.getElementById("mens4");
    const mens5 = document.getElementById("mens5");
 

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
 

        // Obtener los valores de los campos
        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;

        var mensaje = [];
 

        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
            mens0.textContent = "El ID debe tener 5 dígitos exactos.\n";
        }else {
            mens0.textContent = "";
        }
 

        // Validar nombre y apellidos (no pueden estar vacíos)
        if (nombre.trim() === "" || apellidos.trim() === "") {
            mens1.textContent = "El nombre y los apellidos no pueden estar vacíos.";
        }else {
            mens1.textContent = "";
        }
 

        // Validar teléfono (###)###-####
        if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
            mens2.textContent = "El teléfono debe tener el formato (###)###-####.";
        }else {
            mens2.textContent = "";
        }
 

        // Validar correo electrónico
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
            mens3.textContent = "El correo electrónico no es válido.";
        }else {
            mens3.textContent = "";
        }
 
        // Validar edad (número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            mens4.textContent = "La edad debe ser un número positivo.";
        }else {
            mens4.textContent = "";
        }
 

        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            mens5.textContent = "La fecha de nacimiento debe tener el formato AAAA-MM-DD.";
            return;
        }else {
            mens5.textContent = "";
            // Si todas las validaciones pasaron, puedes enviar el formulario o realizar otras acciones aquí
            mensajeError.textContent = "Formulario enviado con éxito.";
        }
    });
});