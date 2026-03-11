
{
    //block statement
    let firstName = "Dinesh"
    firstName = "Krishna" // re-assigned 
console.log("The Firstname" + ' ' + firstName,typeof(firstName));
}
{ 
    //redeclared  statement with in blockstatement
   let firstName = "Pugazh" 
   console.log("The Secondname" + ' ' + firstName,typeof(firstName));
}
//redeclared statement with in blockstatement
let firstName = "Ramesh"
console.log("The Thirdname" + ' ' + firstName,typeof(firstName));
{ //redeclared undefined 
let firstName
console.log("The Fourthname" + ' ' + firstName,typeof(firstName));
}
//outside of block
firstName = "Sam"
console.log("The Fifth" + ' ' + firstName,typeof(firstName));