// Modifico el array para obtener la propiedad nombre del objeto
// Se formatea
// Se añade manejo de errores
function convertirArray(personas){

    // Controlo que sea un arreglo
    if (!Array.isArray(personas)){
        return "No es un array"
    }

    if (personas.length === 0){
        return "El array está vacío"
    }
    
    return personas
        .map(element => {
            // Verificamos que contenga la propiedad nombre
            if (!element.nombre){
                return "No existe la propiedad nombre"
            }

            // Verificamos que sea un string
            if (typeof element.nombre !== "string" || element.nombre.trim() === "") {
                return "La palabra no es texto"
            }

            // Formateamos el texto (Primer letra en mayúscula, resto en minúscula)
            return element.nombre[0].toUpperCase() + element.nombre.substring(1).toLowerCase();
        }
    )
    
}

const personas = [
    { nombre: "carlos", edad: 30, ciudad: "mexico" },
    { nombre: "ana", edad: 25, ciudad: "lima" },
    { nombre: "pedro", edad: 40, ciudad: "bogota" }
];

console.log(convertirArray(personas));