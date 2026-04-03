const redis=require('redis')


//client is used to interact with redis server
const client=redis.createClient({
    host:'localhost',
    port:6379
})


client.on('error',(err)=>console.log(err))

async function main() {
    try {
        await client.connect();
        console.log('Redis is connected successfully');

        //setting a key-value
        await client.set('name','mahender')

        //getting a key-value
        const extractedValue=await client.get('name')
        console.log(extractedValue);


        //deleting a key
        const noOfKeys=await client.del('name');
        console.log(noOfKeys);
        console.log(await client.get('name'));

        //incrementing a val
        const counter=await client.set('count',100)
        await client.incr('count')
        console.log(await client.get('count'));

    } catch (error) {
        console.log(error);
    }
    finally{
        // closing the connection to avoid open connection
        client.quit()
    }
}
main()

/*

*/