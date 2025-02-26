/*
Question 1: Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:

starting station (key name from, give the name of the nearest station in your area as a value);
end station (key name to, give any other station within 100km as a value);
the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).
The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console.
*/

let ticket = {
    from: "Sanra",
    to: "Alvear",
    price: 300
}

console.log(`Ticket desde: ${ticket.from}`);
console.log(`Ticket hacia: ${ticket.to}`);
console.log(`Precio del ticket: ${ticket.price}`);

// Question 2
let person = {};
console.log("Contenido de person:", person);

person.name = "Juan";
person.surname = "Porcelanato";

console.log("Contenido luego de añadir a person:", person)

//Question 3
let books = [
    {
        title: 'Speaking Javascript',
        author: 'Axel Rauschmayer',
        pages: 460
    },

    {
        title: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        pages: 254
    },

    {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        pages: 352
    }
]


// Question 4
books[3] = {
    title: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
    pages: 254
}

console.log(books.length);
console.log(books);

// Question 5
// let slicedbook = books.slice(2);
// console.log('Librito cortado: ', slicedbook);


// Question 6
// console.log('Libro cortado', books)
// console.log('Prueba corte libro', books.shift());

let sumPages = books[0].pages + books[1].pages + books[2].pages + books[3].pages;
console.log(sumPages);
