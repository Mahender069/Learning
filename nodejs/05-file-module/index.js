const path=require('path')
const fs=require('fs')

const newFolderPath=path.join(__dirname,'newFolder')

if(!fs.existsSync(newFolderPath)){
    fs.mkdirSync(newFolderPath)
}

const newFilePath=path.join(newFolderPath,'hello.txt')
//sync way of creating a file
fs.writeFileSync(newFilePath,'hello bhai')

const data=fs.readFileSync(newFilePath,'utf8')
console.log(data);



fs.appendFileSync(newFilePath,'\nhi anna')
const data1=fs.readFileSync(newFilePath,'utf8')
console.log(data1);


const newFolderAsync=path.join(__dirname,'newFolderAsync');
if(!fs.existsSync(newFolderAsync)){
    fs.mkdir('newFolderAsync',(err)=>{
        if(err) throw err;
    })
}
const filePath=path.join(newFolderAsync,'hello2.txt')
fs.writeFile(filePath,'my name is mahender',(error)=>{
    if(error) throw error;


    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
})