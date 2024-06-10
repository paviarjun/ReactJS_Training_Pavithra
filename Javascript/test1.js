let x = 10;
var y = 20;

if (x > y) {
    let message = "x is greater than y";
    console.log(message);
} else {
    var message = "x is not greater than y";
    console.log(message);
}

console.log("Outside if block:");
console.log(x); // 10
console.log(y); // 20
console.log(message); // x is not greater than y



// for (let i = 0; i < 5; i++) {
//     console.log("Inside for loop with let: " + i);
// }
// console.log("Outside for loop with let: " + (typeof i)); // undefined

// for (var j = 0; j < 5; j++) {
//     console.log("Inside for loop with var: " + j);
// }
// console.log("Outside for loop with var: " + j); // 5
