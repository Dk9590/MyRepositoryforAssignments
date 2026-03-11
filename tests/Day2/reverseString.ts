//important for interview
let eName = "Gemma"
let rev ="" // Creating a variable and assigned empty value
for(let i=eName.length-1;i>=0; i--) // here we are first finding the overall length of the char and minusing it so it will start with 4 and i>=0 which means we are starting from 0 and then we are decrement it 

{
rev = rev+eName[i] // iterating loop and reversing the string
}
console.log(rev)


let name1 = "Gemma"
let c = name1.split('').reverse().join('')
console.log(c)