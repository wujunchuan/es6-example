function Person(name){
    this.name = name;
}

Person.prototype.prefixName = function(arr){
    return arr.map(character=>{
        /*
         *使用箭头函数,this可以绑定
         *最佳实践:尽可能多的使用箭头函数
         */
       return character + this.name;
    })
}
var person = new Person('junchuan');
console.log(person.prefixName(['John','Trump']));
