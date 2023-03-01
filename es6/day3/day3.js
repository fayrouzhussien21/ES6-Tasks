class polygon
{
constructor()
{
}
toString()
{

}
}
class circle extends polygon
{
    constructor(r)
    {
        super()
        this.radius=r;
    }
    toString()
    {
        this.area=Math.PI*this.radius*this.radius;
        console.log(`the area of circle is ${this.area} the  radius is ${this.radius} `);
    }
}
class triangle extends polygon
{
    constructor(w,h)
    {super();
        this.width=w;
        this.hight=h;
    }
    toString()
    {
        this.area=1/2*this.hight*this.width;
        console.log(`the area of triangle is ${this.area} the  height is ${this.hight} the  base is ${this.width}`);
    }
}
class square extends polygon
{
    constructor(w)
    {super();
        this.width=w;
        this.hight=w;
    }
    toString()
    {
        this.area=this.hight*this.width;
        console.log(`the area of square is ${this.area} the width and height is ${this.hight}`);
    }
}
class rectangle extends polygon
{
    constructor(w,h)
    {super();
        this.width=w;
        this.hight=h;
    }
    toString()
    {
        this.area=this.hight*this.width;
        console.log(`the area of rectangle is ${this.area} the  height is ${this.hight} the  width is ${this.width}`);
    }
}

var r=new rectangle(4,7);
r.toString();
var r=new square(4);
r.toString();
var r=new triangle(4,7);
r.toString();
var r=new circle(7);
r.toString();
//////////////////////////////////////////////////////////////////////////////////task2////////////////////////////////////////////////////////////////////////////////////////////////

const target = {
    Name:"abcdefg",
    Address:"java",
    Age:30
};

    
        const handler2 = {
        set(target, prop, receiver) {
            try{
            if(target.hasOwnProperty(prop))
            {
                if(prop=="Name"&& receiver.length==7&& typeof(receiver)=="string")
                {
                    return Reflect.set(...arguments);
                }
                
                if(prop=="Address"&& typeof(receiver)=="string")
                {
                    return Reflect.set(...arguments);
                }
                if(prop=="Age"&& receiver>=25&&receiver<=60)
                {
                    return Reflect.set(...arguments);
                }
                else{
                    throw "Error";
                }
    
            }
            else{
                throw "Error";
            }
        }
        catch(e)
        {
        console.error(e);
        }
    
    }
    
    
    };




const proxy2 = new Proxy(target, handler2);
proxy2.Name="fayrouz";
console.log(proxy2.Name);

proxy2.Address="iii";
console.log(proxy2.Address);

proxy2.Age=50;
console.log(proxy2.Age);
///////////////////////////////////////////////////////////task3///////////////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/users").then((results)=>{
    return results.json();
}).then((result)=>{
    console.log(result);
    for( let i=0;i<10;i++)
    {
        
        document.getElementsByClassName("ID")[i].innerHTML=result[i].id;
        document.getElementsByClassName("Name")[i].innerHTML=result[i].name;
        document.getElementsByClassName("Username")[i].innerHTML=result[i].username;
        document.getElementsByClassName("Email")[i].innerHTML=result[i].email;
        document.getElementsByClassName("Phone")[i].innerHTML=result[i].phone;
        document.getElementsByClassName("Website")[i].innerHTML=result[i].website;
        

    }
    



})
