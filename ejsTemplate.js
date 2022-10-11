// const express=require("express")
// const app=express();
// const path=require('path');
// const publicPath=path.join(__dirname,'public')

// app.set('view engine','ejs');
// app.get('/profile',(_,resp)=>{
//     resp.render('profile')
// })
// app.get("",(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })
// app.get("/about",(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get("/help",(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// })
// app.get("*",(_,resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
// })
// app.listen(5000);



// const express=require("express")
// const app=express();
// const path=require('path');
// const publicPath=path.join(__dirname,'public')

// app.set('view engine','ejs');
// app.get('/profile',(_,resp)=>{
//     const user={
//         name:"ashish",
//         email:"ashish@",
//         City:"Hisar"
//     }
//     resp.render('profile',{user});
// })
// app.get("",(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })
// app.get("/about",(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get("/help",(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// })
// app.get("*",(_,resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
// })
// app.listen(5000);

const express=require("express")
const app=express();
const path=require('path');
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');
app.get('/profile',(_,resp)=>{
    const user={
        name:"ashish",
        email:"ashish@",
        City:"Hisar",
        skills:['c','c++','java','php','node','monodb']
    }
    resp.render('profile',{user});
});
app.get("/login",(_,resp)=>{
    resp.render('login')
})
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



