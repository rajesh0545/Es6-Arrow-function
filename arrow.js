//Optional parentheses for the single parameter

var num = x=>{
    console.log(x);

}
num(200);

//Optional braces for single statement and the empty braces if there is not any parameter required.
var show=()=>console.log("Education");
show();

//Arrow Function with Parameters
var x=(a,b,c)=>{
    console.log(a+" " +b+ " "+c);

}
x(10,439,49);

//Arrow function with default parameters
var x =(a,b=3939)=>{
    console.log(a+ " "+b);
}
x(5050);


//mul two values
var num=(a,b)=> a*b
    
console.log( num(5,5));

