function extraerNombresUnicos(personas){

    if(!Array.isArray(personas)){
        return "No es array"
    }

    let nombres = personas.map(element => element.nombre);

    let nombresUnicos = nombres.filter((nombre, index, array) => array.indexOf(nombre) === index);

    return nombresUnicos;
}

const personas = [
    { nombre: "Carlos", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Carlos", edad: 35 }
];

console.log(extraerNombresUnicos(personas))
