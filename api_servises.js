const exp=require("express");
const app=exp();

app.use(exp.json());

let arr=[{
    "name":"supriya",
    "age":23
},
{
    "Name":"aman",
    "age":24

}]

app.get("/userGetData",(serverRequest,serverResponse)=>{
    serverResponse.json(arr)
})

app.listen(3000,()=>{
    console.log("server is  successfully running")
})

