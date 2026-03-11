function session() // function is a keyword and session is a function name 

    {
    console.log("Week2") //implementation of the code
}

session() // Calling the function


function Week(Day: number) // Here week is a Function and Day is a parameter since its a declaring a return providing it type 
{
    return Day  // Return Day is going to store the value
}
console.log(Week(2)) // Print the function and returning the type 

// unanoymous funtion where the setTimeout is a default function which will execute after the waiting peroid of 3000 sec

setTimeout(function(){
    console.log("unknown function")
},3000)