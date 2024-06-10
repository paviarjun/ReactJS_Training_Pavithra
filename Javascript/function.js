// base function 
function sample(){
    console.log("welcome function");
}
sample();

//return function
function test(){
    return "heloo";
}
var val = test();
console.log(val);

// parameterized function

function add(x,y){
    var result = x+y;
    console.log("addition "+result);
}
 add(10,5);

 // default parameterized function

function add(x=1,y=1){
    var result = x+y;
    console.log("addition "+result);
}
// add()
add(10,5);

//Rest parameter
function fun(...para1){
    console.log(para1.length);
}
fun();
fun(1,3);
fun(3,3,3,3)

// Anonymous function: don't have a function name
var a = function(){
    return "pavithra";
}
console.log(a());
