const http=require('http');
const api1=require('./api1');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(api1));
resp.end();
}).listen(3000);