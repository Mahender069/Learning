/*
    pub-publisher(sends messages to channel)
    sub-subscriber(recevies messages from a channel)
    channel is a topic where a publisher sends messages and subscriber will listen to a channel and recevies messages
*/
const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", () => {
  console.log("redis client error occured !!", error);
});

async function test() {
    try {
        await client.connect();
        console.log('successfully connected');


        // const subscriber=client.duplicate() //create a client --> shares the same connection

        // await subscriber.connect(); //connect to redis server for subscriber

        // await subscriber.subscribe('dummy-channel',(message,channel)=>{
        //     console.log(`recevied message ${message} from channel ${channel}`);
        // })


        // await client.publish('dummy-channel','hello guys')


        // //unsubscribing the channel
        // await subscriber.unsubscribe('dummy-channel');
        // await subscriber.quit()


        // //pipelining and transactions
        // //Transactions
        // const transaction=client.multi()
        // transaction.set('key1','val1')
        // transaction.set('key2','val2')
        // transaction.get('key1')
        // transaction.get('key2')


        // console.log(await transaction.exec());



        // without pipelining
        const t=Date.now();
        await client.set('key1','val1');
        await client.set('key2','val2');
        console.log(await client.get('key1'));
        console.log(await client.get('key2'));
        const e=Date.now();
        console.log(e-t);

        //with pipelining
        const t1=Date.now();
        const pipe=client.multi();
        pipe.set('key1','val1');
        pipe.set('key2','val2');
        pipe.get('key1');
        pipe.get('key2');
        const t2=Date.now();
        console.log(t2-t1);
    } catch (error) {
        console.log('error while connecting redis',error);
    }
    finally{
        client.quit()
    }
}


test();
