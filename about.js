// const express=require("express")
// const app=express();
// const path=require('path');
// const publicPath=path.join(__dirname,'public')
// app.use(express.static(publicPath));
// app.listen(5000);

//remove extension
const express=require("express")
const app=express();
const path=require('path');
const publicPath=path.join(__dirname,'public')
app.get("",(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get("/about",(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get("/help",(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})
app.get("*",(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})
app.listen(5000);



