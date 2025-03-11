
// Array de objetos nombre y nacimiento
// map() para calcular la edad
// devolver nuevo array con nombre y edad

function calcularEdad(personas) {
    
    const actualYear = 2025;

    // Controlo que personas contenga un array
    if (!Array.isArray(personas)){
        return "No es un array"
    }

    return personas
        .map(element => {

            // Compruebo que exista la propiedad nombre o sea un string
            if(!element.nombre || typeof element.nombre != "string"){
                return "Nombre inválido"
            }

            // Compruebo que exista la propiedad nacimiento o que sea un número 
            if(!element.nacimiento || typeof element.nacimiento != "number"){
                return `Nacimiento inválido para ${element.nombre || "Desconocido"}`;
            }

            // Controlo que el nacimiento exista entre parámetros reales
            if (element.nacimiento < 1900 || element.nacimiento >= actualYear) {
                return `Nacimiento inválido para ${element.nombre || "Desconocido"}`;
            }

            // Guardo el cálculo de edad en una variable
            const edad = actualYear - element.nacimiento;

            return `Mi nombre es ${element.nombre[0].toUpperCase() + element.nombre.substring(1).toLowerCase()} y tengo ${edad} años.`;
        })

}

const personas = [
    { nombre: "carlos", nacimiento: 2025},
    { nombre: "ana", nacimiento: 2000 },
    { nombre: "pedro", nacimiento: 1985 }
];

console.log(calcularEdad(personas));
