let arr = [56,78,90,23,90,76,43,56]
for(let i=0; i<arr.length; i++)
{
    // Corrected the inner loop condition from 'i<arr.length' to 'j<arr.length'
    for(let j=i+1; j<arr.length; j++) 
    {
        if(arr[i]===arr[j])
        {
            console.log("Print the duplicates: " +arr[i])
        }
    }
}
// Output:
// Print the duplicates: 56
// Print the duplicates: 90
