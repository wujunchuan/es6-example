function Person(name){
    this.name = name;
}

Person.prototype.prefixName = function(arr) {
    return arr.map(function(character){
        //this ==> global
        //return character + this.name;
        return character + this.name;
    }.bind(this));
}

var person = new Person('junchuan');
console.log(person.prefixName(['John','Trump']));
