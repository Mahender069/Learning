const http=require('http')

const server=http.createServer((req,res)=>{
    const URL=req.url
    if(URL=='/'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end('Home Page')
    }
    else if(URL=='/about'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end('About Page')
    }
    else if(URL=='/projects'){
        res.writeHead(200,{'Content-type':'json'})
        const data={
            name:'Mahender',
            age:20
        }
        const str=JSON.stringify(data)
        res.end(str)
    }
})
const port=1000
server.listen(port,()=>{
    console.log('Server is listening to 1000');
})