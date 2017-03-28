function Person(name){
    this.name = name;
}

Person.prototype.prefixName = function(arr) {
    //this ==> Person's Object==>person
    //that ==> this
    var that = this;
    return arr.map(function(character){
        //this ==> global
        //return character + this.name;
        return character + that.name;
    });
}

var person = new Person('junchuan');
console.log(person.prefixName(['John','Trump']));
