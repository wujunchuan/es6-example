let snack = 'John Trump';

function getFood(food) {
    if(food){
        //块级作用域
        let snack  = 'Junchuan';
        return snack;
    }
    return snack;
}

//output:John Trump
console.log(getFood(false));
