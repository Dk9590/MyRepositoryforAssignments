let mark = 55;

if (mark >= 85) {
  console.log("Your Grade is A");
} else if (mark >= 60 && mark < 85) { // Fixed: added 'mark' before '< 85'
  console.log("Your Grade is B");
} else if (mark >= 50) {
  console.log("Your Grade is C"); 
} else {
  console.log("Your Grade is D");
}
