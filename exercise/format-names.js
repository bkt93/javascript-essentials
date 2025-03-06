// Long
function formatNames(arr){
    return arr.map(function(element){
        return element[0].toUpperCase() + element.substring(1).toLowerCase();
    })
}

console.log(formatNames(["Gabriel", "hasbhula"]))

// Short
const shortFormatNames = arr => arr.map(element => element[0].toUpperCase() + element.substring(1).toLowerCase());
console.log(shortFormatNames(["jUAN", "elonMUSK"]));