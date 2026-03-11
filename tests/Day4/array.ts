let data = ["chrome", true, 132.8];
data[5] = "webkit";
// data is now: ["chrome", true, 132.8, <2 empty items>, "webkit"]
data.pop();
// Removes "webkit"
data.push("firefox");
// data is now: ["chrome", true, 132.8, <2 empty items>, "firefox"]
data.shift();
// Removes "chrome"
// data is now: [true, 132.8, <2 empty items>, "firefox"]
for (let value of data) {
  console.log(value);
}

