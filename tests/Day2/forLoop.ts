let input = 30;
let count = 0;

for (let i = 0; i <= input; i++) {
    if (i % 2 == 1) {
        // Both lines below now only run if 'i' is odd
        console.log("The given no is odd number: " + i);
        count++; 
    }
}

console.log("the total no of count is: " + count); // Will now show 15
