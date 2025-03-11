function generarHashtags(arr){

    // Controlo que sea un array
    if(!Array.isArray(arr)){
        return "No es un array";
    }

    //Controlo que el array no esté vacío
    if(arr.length === 0){
        return "El array está vacío";
    }
    
    return arr
        .map(element => {


            if(typeof element != "string" || element.trim() === "") {
                return "#HashtagInválido"
            }

            // Limpio los elementos
            let cleanedElement = element.trim();
            // Hago split de las palabras
            let splitedHash = cleanedElement.split(" ").filter(element => element.length > 0)
            // Recorro y formateo los elementos
            let format = splitedHash.map(element => element[0].toUpperCase() + element.substring(1).toLowerCase());
            // Uno los elementos ya formateados
            let joinData = format.join("")

            return "#" + joinData;
        })

}

// ✅ Ejemplos Correctos
console.log(generarHashtags(["javascript", "react", "nodejs", "mi lenguaje favorito"]));  
// ✅ ["#Javascript", "#React", "#Nodejs", "#MiLenguajeFavorito"]

console.log(generarHashtags(["  python  ", " vue ", " full  stack "]));  
// ✅ ["#Python", "#Vue", "#FullStack"]

// ❌ Manejo de Errores
console.log(generarHashtags([])); 
// ✅ "El array está vacío"

console.log(generarHashtags(["", " ", "  "])); 
// ✅ ["#HashtagInválido", "#HashtagInválido", "#HashtagInválido"]

console.log(generarHashtags(["mi lenguaje favorito", " es6 "])); 
// ✅ ["#MiLenguajeFavorito", "#Es6"]

console.log(generarHashtags([123, null, undefined, "vue"])); 
// ✅ ["#HashtagInválido", "#HashtagInválido", "#HashtagInválido", "#Vue"]

console.log(generarHashtags("javascript")); 
// ✅ "No es un array"
