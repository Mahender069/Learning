const redis = require("redis");
const client = redis.createClient();

client.on("error", (err) => console.log(err));

async function redisDataStructure() {
  try {
    await client.connect();
    console.log("Redis server connected!!");

    //String -> SET,GET,MSET(multiple set),MGET(multiple get)
    await client.mSet(["email", "mahender@mahender.org", "age", "60"]);
    const [email, age] = await client.mGet(["email", "age"]);
    console.log(email);
    console.log(age);

    //list -> LPUSH(begin),RPUSH(end of the list),LRANGE,LPOP,RPOP
    // await client.lPush('notes',['note1','note2','note3'])

    const result = await client.lRange("notes", 0, -1);
    console.log(result);

    //set -> SADD,SMEMBERS(all elements of the set),SISMEMBER,SREM(to remove items)
    const nickNames = await client.sMembers("nickname");
    console.log(nickNames);
    const isthere = await client.sIsMember("nickname", "a");
    console.log(isthere);

    //sorted sets --> ZADD,ZRANGE,ZRANK,ZREM
    await client.zAdd("cart", [
      {
        score: 100,
        value: "cart1",
      },
      {
        score: 150,
        value: "cart2",
      },
      {
        score: 200,
        value: "cart3",
      },
      {
        score: 10,
        value: "cart4",
      },
    ]);

    // const getTopCartItems = await client.zRange("cart", 0, -1);
    // console.log(getTopCartItems);
    // const getItemswithScores=await client.zRangeWithScores('cart',0,-1)
    // console.log(getItemswithScores);
    // const getItemwithRank=await client.zRank('cart','cart2')
    // console.log(getItemwithRank);


    //hash-> HSET,HGET,HGETALL,HDEL

    await client.hSet('product',{
      name:"iphone",
      model:'17pro'
    })
    await client.hSet('product2',{
      name:"vivo",
      model:'17'
    })
    console.log(await client.hGet('product','model'));
    console.log(await client.hGetAll('product2'));
  } catch (error) {
    console.log(error);
  } finally {
    await client.quit();
  }
}
redisDataStructure();
