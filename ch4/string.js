var string = 'food';
var subString = 'foo';
/*
 *原本判断字符串是否包含啥的判断方法
 */
console.log(string.indexOf(subString) > -1); //true

/*
 *ES6的方法
 */
console.log(string.includes(subString)); //true

//.repeat() for es5
function myRepeat(string,count) {
    var strings = [];
    while(strings.length<count){
        strings.push(string);
    }
    return strings.join('');
}
console.log(myRepeat('wujunchuan',4));
//.repeat() for es6
console.log('wujunchuan'.repeat(3));
