var generateCourses=(obj)=>
{
    try{
defaultObject=
{
courseName:"Es6",
courseDuration:"4 Days",
courseOwner:"javascript"
}
var o=Object.assign({},defaultObject,obj);
if(Object.keys(o).length!=Object.keys(defaultObject).length)throw'Oops! you have entered different object properties';
console.log(`course name is ${o.courseName} course duration is ${o.courseDuration} course Owner is ${o.courseOwner}`)
    }
    catch(e)
    {
        console.error(e);
    }
}

obj={
    Name:"lol",
    courseName:"Es6",
    courseDuration:"8 days"
}
generateCourses(obj);
////////////////////////////////

function *generateFibonacci(max)
{
    var first=1,second=0,temp=0;
for(let i=0;i<max; i++)
{
    if(i<2)yield console.log(i);
    else{
        temp=first;
        first+=second;
        second=temp;
        if(first>=max)break;
        yield console.log(first);
    }
}
}
let excute=generateFibonacci(12);
while(!excute.next().done)
{
    excute.next();
}
////////////////////////////////////

function *generateSecondFibonacci(max)
{
    var first=1,second=0,temp=0;
for(let i=0;i<max; i++)
{
    if(i<2)yield console.log(i);
    else{
        temp=first;
        first+=second;
        second=temp;
        yield console.log(first);
    }
}
}
let excuteSecond=generateSecondFibonacci(4);
while(!excuteSecond.next().done)
{
    excuteSecond.next();
}
////////////////////////////
var Reblace={
    [Symbol.replace]:function(str,val)
    {
if(val>15)
{
    return str.substring(0,15)+"...";
}
else{
    return str.substring(0,val);
}
    }
}
var Name="fayrouz hussien";
var result=Name.replace(Reblace,Name.length);
console.log(result);
///////////////////////////////////

var iterableObj={
    course:"uiux",
    grade:"A",
    [Symbol.iterator]:function()
    {
        var iterableObjKeys=Object.keys(iterableObj);
        var counter=0;
        return{
            next:function()
            {
                if(counter==iterableObjKeys.length)return{value:undefined,done:true}
                else
                {
                    return{value:iterableObj[iterableObjKeys[counter++]],done:false}
                }

            }
        }

    }
}
for(i of iterableObj)
{
    console.log(i);
}
