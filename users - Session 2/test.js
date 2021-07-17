



function sum(num1, num2) {
    return num1 + num2;
}

function sayHello(name, lastName) {
    console.log("Hi " + name + " " + lastName);
}


function runTest1() {
    console.log("Starting test 1 - functions");

    sayHello("Alexandro", "Garcia");

    let a = 21;
    let b = 42;
    let result = sum(a, b);
    console.log(result);

}


// OBJECTS

//Object Constructor
function Dog(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}


function runTest2() {
    console.log("Tests for Objects");

    // OBJECT LITERAL
    // USED FOR CONFIGURATION, OR A 1 TIME STRUCTURE
    let dog = {
        name: "Fido",
        age: 2,
        color: "Red"
    };
    console.log(dog);

    console.log( dog.name ); //READS
    dog.age = 3; //WRITES

    let lola = {
        name: "Lola",
        age: 5,
        color: "Pink"
    };
    console.log(lola);
    // OBJECT LITERAL




    // Object Constructor
    // used: multiple object same structure

    let solo = new Dog("Solo", 2, "Blue");
    console.log(solo);

    let another = new Dog("Loco", 25, "Green");
    console.log(another);


    // Class
}



console.log(a)