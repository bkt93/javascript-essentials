// Filtrar según las propiedades brindadas
function filtrarPorPropiedad(arr, b, c){

    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(!b || typeof b != "string"){
        return "La propiedad no es válida"
    }

    if(!c || c.length === 0){
        return "La propiedad no es válida"
    }

    // b es la propiedad dinámica
    // c es el value
    let filtrarProp = arr.filter(element =>
        element[b] === c
    ) 

    return filtrarProp.length > 0 ? filtrarProp : "No existe coincidencia";

}

const usuarios = [
    { nombre: "Carlos", edad: 30, ciudad: "Madrid" },
    { nombre: "Ana", edad: 25, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 40, ciudad: "Madrid" },
    { nombre: "Lucía", edad: 22, ciudad: "Sevilla" }
];

console.log(filtrarPorPropiedad(usuarios, "ciudad", "Madrid"));  
// ✅ [ { nombre: "Carlos", edad: 30, ciudad: "Madrid" }, { nombre: "Pedro", edad: 40, ciudad: "Madrid" } ]

console.log(filtrarPorPropiedad(usuarios, "edad", 25));  
// ✅ [ { nombre: "Ana", edad: 25, ciudad: "Barcelona" } ]
