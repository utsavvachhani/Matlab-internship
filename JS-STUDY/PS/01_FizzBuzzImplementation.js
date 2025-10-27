let n=15;
console.log(fizzBuzz(n));

function fizzBuzz(n) {
    let res = [];
    let i=1;

    while(i<=n){
        if(i%3===0 && i%5===0){
            res.push("FizzBuzz");
        }        else if(i%3===0){
            res.push("Fizz");
        }        else if(i%5===0){
            res.push("Buzz");
        }        else{
            res.push(i.toString());
        }
        i++;    
    }
    return res ;
}