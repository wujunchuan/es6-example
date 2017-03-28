var snack = 'John Trump';

function getFood(food) {
    //snack的声明会被提升到此处,但是没有赋初始值
    //因此得到了undefined
    if(food){
        //这里存在变量提升
        var snack  = 'Junchuan';
        return snack;
    }
    return snack;
}
//careful!output:undefined
console.log(getFood(false));
