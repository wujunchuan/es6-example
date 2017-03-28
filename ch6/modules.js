/*
 *在ES6之前Browser端的模块化代码需要使用库的支持,在Node.js中则使用require,在ES6中我们可以直接使用AMD和CommonJS这些模块
 */

/*
 * 导出变量
 */

export let name = 'Wujunchuan';
export let age  = 25;
/*
 *以对象的形式导出
 */
function sumTwo(a,b) {
    return a + b;
};
function sumThree(a,b,c) {
    return a + b + c;
};
export {sumTwo,sumThree};

/*
 *以函数的形式分别导出
 */
export function sumTwo(a,b){
    return a + b;
};
export function sumThree(a,b,c){
    return a + b +c;
};

/*
 *还可以导出一个默认的出口
 */
function sumTwo(a,b){
    return a + b;
};

function sumThree(a,b,c) {
    return a + b + c;
};

let api = {
    sumTwo,
    sumThree
};

export default api;
// export {api as default};

/*
 *导入
 */

import 'underscore';//这引用方式会执行文件内最上层的代码
//按命名引用
import {sumTwo,sumThree} from 'math/addition';
//使用as重命名模块
import {
    sumTwo as addTwoNumbers,
    sumThree as addThreeNumbers
} from 'math/addition'
//import all the things
import * as additionUtil from 'math/addition';
const {sumTwo,sumThree} = additionUtil;

/*
 *我们通常建议一个模块导出越简洁越好,但是有时候需要命名应用与默认应用混合着用,如果一个模块是这样导出的
 */

export {foo as default,foo1,foo2}
//则导入需要这样
import foo,{foo1,foo2} from foos;
