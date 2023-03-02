// let age = 15;
// if (age > 18){
//     console.log("eligible")
// }

// else if(age == 18){
//     console.log("just got eligible")
// }

// else{
//     console.log("not eligible")
// }


// switch case

// let car = "Subaru";
// switch(car){

//     case "subaru" :
//         console.log("Road racer");
//         break;
//     case "Toyota" :
//         console.log("Good for ugandans");
//         break;
//     case 3 :
//         console.log("average");
//         break;
//     case "Chevolette" :
//          console.log("nice one");
//             break;
//     default:
//         console.log("this is not one of the cars");
// }

// assignment: look into arrays and their accessibility

let fruits= ['A','B','C','D'];
// fruits.pop();
// fruits.push('E');
// console.log(fruits);

// pop- remove last item
// Push-add

let itemRemoved = fruits.shift();
fruits.unshift('F'); // Add element
fruits.splice(0,0, 'Berries', 'Guavas');
console.log(fruits);
console.log(itemRemoved);