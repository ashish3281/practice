// let x=20;
// if(x===20){
//     console.log("match");
// }
// for( i=0;i<=x;i++){
//     console.log(i);
// }

const arr=[1,2,3,4,5,3,6]
arr.filter((item)=>{
    console.log(item);
})

// let result=arr.filter((item)=>{
//     return item===3;
// })
// console.log(result);

let result=arr.filter((item)=>{
    return item>3;
})
console.log(result);