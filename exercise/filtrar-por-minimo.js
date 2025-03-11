//1️⃣ Recibe un array de objetos con diferentes propiedades.
//2️⃣ Recibe una propiedad clave y un valor mínimo.
//3️⃣ Usa filter() para devolver solo los objetos donde la propiedad tenga un valor mayor o igual al número dado.

function filtrarPorValorMinimo(arr, b, c){

    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }

    if(!b || typeof b != "string"){
        return "No es una propiedad válida"
    }

    if(!c || typeof c != "number"){
        return "No es una propiedad válida"
    }

    let filtrarMinimo = arr.filter(element =>
        element[b] >= c
    )

    return filtrarMinimo.length > 0 ? filtrarMinimo : "No existe un valor que coincida"
}

const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Monitor", precio: 300 }
];

console.log(filtrarPorValorMinimo(productos, "precio", 200));  
// ✅ [ { nombre: "Laptop", precio: 1000 }, { nombre: "Monitor", precio: 300 } ]

console.log(filtrarPorValorMinimo(productos, "peso", 200));  
// ✅ "No existe un valor que coincida."

console.log(filtrarPorValorMinimo([], "precio", 200));  
// ✅ "El array se encuentra vacío."

console.log(filtrarPorValorMinimo(productos, "precio", "caro"));  
// ✅ "El valor mínimo debe ser un número."
