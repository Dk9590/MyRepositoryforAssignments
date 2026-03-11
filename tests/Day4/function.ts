function factorial (num :number) :number 
{
if(!Number.isInteger(num))
{
throw new Error("Provided no is not a number")
}
if(num<0)
{
    throw new Error("Provided no is not a negative")
}
if(num ===0 || num ==1)
{
    return 1
}
return num* factorial(num-1)
}
const numb = -1;
const result = factorial(numb);
console.log('The factorial numb is ${num} is: ${result}')