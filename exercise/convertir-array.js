function convertirArray(personas){

    // Controlo que sea un arreglo
    if (!Array.isArray(personas)){
        return "No es un array"
    }

    if (personas.length === 0){
        return "El objeto está vacío"
    }
    
    const personasNombre = personas.map(element => element.nombre);
    
    return personasNombre.map(element => element[0].toUpperCase() + element.substring(1).toLowerCase());
    
}

const personas = [
    { nombre: "carlos", edad: 30, ciudad: "mexico" },
    { nombre: "ana", edad: 25, ciudad: "lima" },
    { nombre: "pedro", edad: 40, ciudad: "bogota" }
];

console.log(convertirArray(personas));