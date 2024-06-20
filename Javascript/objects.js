const result = {
    name: 'pavi',
    age:27,
    alive: true,
    parent:{
        father: 'muru',
        mother: 'geet'
    },
    // fullname: function (){
    //     return this.age;

    // }
    fullname(){
        return this.age;
    }
}
console.log(result.fullname());
console.log(result.parent.father);