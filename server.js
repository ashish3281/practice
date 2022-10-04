// const http = require('http')

// function dataControl(req,resp) {

//     resp.write("<h1> Ashish goyal");
//     resp.write("<h1><br>nitin</h1>");
//     resp.end();
// }

// http.createServer(dataControl).listen(3000);

const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Ashish goyal</h1>");
    resp.end();
}).listen(3000);