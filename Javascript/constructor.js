var func = new Function("a", "b", "return a*b");
function multi(){
    var result;
    result = func(10,3);
    console.log(result);
}
multi();