// var can be redeclared and updated and outside of blocked scope

var num = 10;
var num=66;
function test(){
    var num = 500;
    console.log("inside block",+num);
}
test();
console.log("outside block",+num);


//    let times = 4;

//    if (times > 3) {
//         var hello = "say Hello instead";
//         console.log(hello);// "say Hello instead"
//     }
//    console.log(hello) // hello is not defined


// let cannot be redeclared only updated and only blocked scope
// let num = 10;
// let num=66;
// function test(){
//     //  let num = 500;
//     console.log("inside block",+num);
// }
// console.log("outside block",+num);
// test();

// const declarations are block scoped
// Like let declarations, const declarations can only be accessed within the block they were declared.

// const cannot be updated or re-declared