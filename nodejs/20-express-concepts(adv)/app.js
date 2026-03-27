const fs=require('fs');


const stream=fs.createReadStream('./notes.txt');

stream.on('data',(chuck)=>{
    setTimeout(()=>{

    console.log(chuck.toString())
    },3000)
})