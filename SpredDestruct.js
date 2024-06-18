// Ej 1: Reescribe el código para usar destructuring en vez de asignar cada variable individualmente.

let item = ["Egg", 0.25, 12];
const [item1, item2, item3] = item;
console.log(`Item: ${item1}, Quantity: ${item3}, Price: ${item2}`);

// Ej 2: Reescribe el código para asignar a cada variable el número correcto.

let numbers = [3, 5, 4, 2, 6, 1];
let [three, five, four, two, six, one] = numbers;

console.log(
  `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
);

// Ej 3: Tenemos el objeto user. Desestructura sus propiedades en las variables name, age y isAdmin (esta última no existe, tendrás que crear un valor predeterminado false).

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// Ej 4: Reescribe el código para desestructurar el array.

let person = [12, "Chris", "Owen"];

const [person1, person2, person3] = person;

console.log(`Person - Age: ${person1}, Name: ${person2} ${person3}`);

// Ej 5: Reescribe el código para usar desestructuring, teniendo en cuenta que no debes crear ninguna variable vacía:

let persons = ["Chris", 12, "Owen"];

const [persons1, , persons3] = persons;

console.log(`Name: ${persons1} ${persons3}`);

// Ej 6: Desestructura el último elemento del array.

const students = ["Christina", "Jon", "Alexandare"];

const [, , lastName] = students;

console.log(lastName);

// 7: Usando destructuring, obtén sólo los nombres de los arrays dentro del array.

const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

const [, [student1, student2], [student3, student4]] = moreStudents;

console.log(student1, student2, student3, student4);
