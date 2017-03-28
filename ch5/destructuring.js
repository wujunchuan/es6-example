/*
 * es5解构数组
 */
var arr = [1,2,3,4];

var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

//output:1,2,3,4
console.log(a);
console.log(b);
console.log(c);
console.log(d);

/*
 * es6解构数组
 */

var [a,b,c,d] = [4,5,6,7];

//output:4,5,6,7
console.log(a);
console.log(b);
console.log(c);
console.log(d);

/*
 *es5解构对象
 */

var luke = {occupation:'jedi',father:'anakin'};
var occupation = luke.occupation;
console.log(occupation);//jedi
var father = luke.father;
console.log(father); //anakin

/*
 *es6解构对象
 */

var luke = {occupation2:'jedi2',father2:'anakin2'};
let {occupation2,father2} = luke;
console.log(occupation2);//jedi
console.log(father2); //anakin
