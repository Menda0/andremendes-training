console.log("hello world");

var a = 10;

var a = 20;

console.log(a);

let b = 10;

const c = 10;

// c = 20;

console.log(c);

let arr1 = [1, 2, 3];

const arr2 = [1, 2, 3];

console.log("arr1:", arr1);
console.log("arr2:", arr2);

const obj1 = {
    name : "mendao",
    age: 20,
    profession: 'Fullstack'
}

console.log("nome:",obj1.name)

const myName = obj1.name;

console.log("myName:", myName);

const myAge = obj1.age;
const myProfession = obj1.profession;

// destructuring in object
const {name, age, profession} = obj1;

console.log("name:", name);
console.log("age:", age);
console.log("profession:", profession);

// Component in React
// function Component(props){
//     return <h1>{props.name}</h1>
// }

// function Component2({name, age, profession}){
//     return <h1>{name}</h1>
// }

// Construct
const obj2 = {
    age,
    profession,
    name: "Andre"
}

console.log("obj2:", obj2);

// Destructuring in array
const arr3 = [1, 2, 3, 4, 5];

const [num1, num2, batatas, num4, num5] = arr3;

console.log(batatas)

// In React you can use useState to create a state variable this uses destructuring
//const [task, setTask] = useState([])

// Constructing an array
const arr4 = [batatas, num4, num5]
console.log("arr4:", arr4)

// Immutability
// You can't change the value of a variable
let var2 = 10
let var3 = var2

var3 = 20

console.log("var2:", var2)
console.log("var3:", var3)

// Primitive types are copied by value
// Objects are copied by reference
// Mutable
// You can change the value of a variable
const obj3 = {
    age: 20
}

const obj4 = obj3;

obj4.age = 30;

console.log("obj3.age:", obj3.age);
console.log("obj4.age:", obj4.age);

// Primitive types are copied by value
// Objects are copied by reference

const person1 = {
    name : "mendao",
    age: 20,
    profession: 'Fullstack'
}

const person2 = {
    ...person1,
    name: "Andre"
}

person2.age = 30;

console.log("person1:", person1)
console.log("person2:", person2)

const task = ["Ir ao surf", "Estudar React", "Estudar TypeScript", "Estudar Node"]

const newTask = [...task, "Estudar JavaScript"]

const marco = {
    name: "Marco",
    age: 20,
    profession: ["Fullstack", "DevOps"]
}

const andre = {
    ...marco,
    profession: [...marco.profession],
    name: "Andre"
}

andre.profession.push("Student")

console.log("andre.profession:", andre.profession)
console.log("marco.profession:", marco.profession)