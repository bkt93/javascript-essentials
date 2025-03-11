// Devolver personas mayores o iguales a 18 año
function filtrarMayoresDeEdad(personas){
    if(!Array.isArray(personas)){
        return "Esto no es un array"
    }

    if(personas.length === 0){
        return "El array está vacío"
    }

    let ageFilter = personas.filter(element =>
        typeof element.edad === "number" & element.edad >= 18
    );
    
    return ageFilter.length > 0 ? ageFilter : "No hay personas mayores de edad."

}

const personas = [
    { nombre: "Carlos", edad: 30 },
    { nombre: "Ana", edad: 16 },
    { nombre: "Pedro", edad: 20 },
    { nombre: "Luis", edad: 17 }
];

console.log(filtrarMayoresDeEdad(personas));  