const fs=require('fs');

fs.readFile('output.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
    const newData=data.toUpperCase();
    fs.writeFile('newoutput.txt',newData,(err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log('data is written succesfully');
    })
})