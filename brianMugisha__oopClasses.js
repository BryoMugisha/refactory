// SIMPLE HELLO WORLD

console.log("Hello World");


console.log("----STRINGS-------------------")

//strings

let string1 = "going to school";
let string2 = "on monday";
let string3 = "Alex";

console.log("Joseph and " + string3 + "are " + string1 + " " + string2)

let num ="4"
let num2 = "5"

console.log(num + num2)

// Nan = not a number
// parseInt = coerce an integer to a string

console.log("-------LOOPS--------------------------")
// LOOPS

let person;

for(person = 0; person <=5; person ++){
    console.log('value of student is:' + person);
}

for(person = 1; person < 5; person +2){
    console.log('value of student is:' + person);
}

// fruits example
let fruits = ['Apple' , 'Banana', 'Grapes', 'Berries'];
let fruit;
console.log("*****for****")

for(fruit of fruits){
console.log(fruits[fruit])
}

console.log("****for of***")
for(fruit of fruits){
console.log(fruits)
}

//while loops

let counter=0;
while(counter <= 10){
    console.log('counter:' +counter)
    counter ++
}

// do while loop
// counter=8;
// do{
//     console.log('the value is:' +counter)
// } while(counter <=10)


// console.log("*****pre increament****")
counter=6;
do{
    counter--;
    console.log('the value is:' +counter)
} while(counter >= -2)

console.log("----CONDITIONS-------------------------")
// CONDITIONS

// hello 

// let, const, var, false, true, if

let firstName = "irene"
let dogName = "spike"

let student; // variable declaration

let lastName = "Ndagire";
// = assignment operator

let studentName; middleName, cohort, year, // varibale declaration


// initialization
studentName = "Angella";
middleName = 'Motoka';
cohort = 13;
year = 2012;

console.log("----OPERATORS------------------")
// OPERATORS

let q = 20
let r = 15

let result = q > r ? "You are allowed" : "Not allowed"

console.log('Output is ' +result)

// ternary operator is the same as if-else but on one line

let s = true;
let t = false;


console.log(s && t) // logical AND
console.log(s || t) // logical OR
console.log(!s) // ! logical NOT
console.log(!t)

