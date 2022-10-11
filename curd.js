const fs=require('fs')
const path=require('path')
const dirPath=path.join(__dirname,'curd file');
const filePath=`${dirPath}/apple.txt`;
  //create file
  //fs.writeFileSync(filePath,"this my first file");

  //read file
//   fs.readFile(filePath,(err,item)=>{
//     console.log(item);
//   })
//   <Buffer 74 68 69 73 20 6d 79 20 66 69 72 73 74 20 66 69 6c 65>

// fs.readFile(filePath,'utf8',(err,item)=>{
//         console.log(item);
//        })
//        output-- this is my first file

//update file
// fs.appendFile(filePath,"  and file name is apple.txt",(err)=>{
//     if(!err) console.log("file is updated");
// })

// //rename
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })


//delete file
fs.unlinkSync(`${dirPath}/fruit.txt`)
