let person = {
    name:"Yvonne",
    eyeColor:"Brown",
    age:24,
    updateAge: function(){ 
        return ++person.age;
    }
}
console.log(person);