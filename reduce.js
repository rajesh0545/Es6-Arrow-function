const messege=["javascript", "is", "light weight", "program"];

function string(accumulator,currentvalue){
    return accumulator+currentvalue;
}
let x =messege.reduce(string);
console.log(x);