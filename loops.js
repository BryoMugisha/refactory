let student;

for(student = 0; student <=5; student ++){
    console.log('value of student is:' + student);
}

for(student = 1; student < 5; student +2){
    console.log('value of student is:' + student);
}

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