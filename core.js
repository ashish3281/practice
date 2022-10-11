// //console.log("code step by step");//global 
// const fs=require('fs');//fs is non global

// fs.writeFileSync("hello.txt","code step by step");
// console.log("->>",__filename);//to check file name
// console.log("->>",__dirname);//to check directory name

const fs=require('fs').writeFileSync;
fs("abc.txt","abc");