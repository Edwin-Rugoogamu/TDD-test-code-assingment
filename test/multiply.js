const factorial = (p)=>{
let number = 1;
for(let n =1 ; n <= p ; n++ ){
    number *= n ;
    console.log(number)
}
return number;
};

 module.exports = factorial