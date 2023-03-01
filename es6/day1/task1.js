var obj={
    x:6,
    y:8
}
var {x:y,y:x}=obj;
console.log(`x:${x} y:${y}`);
//////////////
var findMaxAndMin=(...arr)=>
{
    let max=Math.max(...arr);
    let min=Math.min(...arr);
return [max,min];
}
[maxx,minn]=findMaxAndMin(...[3,8,9,2,23]);
console.log(`maximum number is : ${maxx} minimum number is : ${minn}`);
////////////////

var fruits=["apple","strawberry","banana","orange","mango"];
console.log(fruits.every(fruit=>typeof fruit==='string'));

//////////////////
console.log(fruits.some(fruit=>fruit.startsWith("a")));
////////////////////
var newFruits=fruits.filter(fruit=>fruit.startsWith("b") || fruit.startsWith("s"));
    console.log(newFruits);
    ///////////////////
    var newFruits2=fruits.map(fruit=> `i like ${fruit}`)
        newFruits2.forEach(fruit=>console.log(fruit));
        /////////////////

