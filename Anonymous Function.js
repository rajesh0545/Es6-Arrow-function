//anonymous function
var x= function(){return "This is my first program"}
console.log(x());

//Anonymous Parameterized Function

var x = function(a,b) {return a*b};
function product(){
    var result;
    result=x(5,5);
    console.log( "this product: "+result)
}
product();


