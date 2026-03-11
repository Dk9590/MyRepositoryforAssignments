import test ,{ expect } from "@playwright/test";
//
let user = `admin` //backtick
let password = `slBB0^k9l^YU` //backtick
let login = `${user}:${password}` //Backticks (`) and template literals in TypeScript allow you to create dynamic strings and multiline text easily by embedding variables directly using ${variable} syntax, replacing the need for messy string concatenation
let Loginvalue =btoa(login) //here we are using base64 encoder we are passing the value like convert login and password into conversion
let sys_id:any // this is defined globally no need to use forlocally 
test("Validating the API" ,async({request})=>        // for api use Request fixture to call the api 
{
    //creating a const variable and using page fixture we are calling post method 
    const postresponse = await request.post("https://dev362368.service-now.com/api/now/table/change_request",{
headers:{
    "Content-Type":"application/json",
    "Authorization" :`Basic ${Loginvalue}`
}, // here we are adding the data here we are going to add the request body into here 
data:{
"short_description":"Automation learning playwright",
"change_plan":"Learning Automation"
}
    })
//here we are going to get the response and print the sys_id 
let res = await postresponse.json()
sys_id = res.result.sys_id
console.log(sys_id)
const reqresponse = await request.get(`https://dev362368.service-now.com/api/now/table/change_request/${sys_id}`,{
 headers:{
    "Content-Type":"application/json",
    "Authorization" :`Basic ${Loginvalue}`
}

})
const rest = await reqresponse.json()
console.log(rest)
const putresponse = await request.put(`https://dev362368.service-now.com/api/now/table/change_request/${sys_id}`,{
    headers:{
       "Content-Type":"application/json",
    "Authorization" :`Basic ${Loginvalue}` 
    },
    data:{
        "short_description": "Changing parameter"
    }
})
let putres = await putresponse.json()
console.log(putres)



}) 