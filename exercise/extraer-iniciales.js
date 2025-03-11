function extraerIniciales(arr){

    return arr
    
        .map(element => {

            // Separo por " " 
            let nombres = element.split(" ");

            // Obtengo las iniciales
            let iniciales = nombres.map(nombres => nombres[0].toUpperCase());

            // Junto las iniciales con "."
            return iniciales.join(".");

        });

};

console.log(extraerIniciales(["Carlos Pérez", "Ana Gómez", "Pedro José Morales"]));

console.log(extraerIniciales(["juan manuel", "maría fernanda", "José Luis Martínez"]));  

