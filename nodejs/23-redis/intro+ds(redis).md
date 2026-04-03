# Redis with Node.js -- Study Notes

## 1. What is Redis

**Redis (Remote Dictionary Server)** is an in‑memory data store used as
a database, cache, and message broker.\
It stores data in RAM which makes it extremely fast compared to
disk-based databases.

Common uses: - Caching - Session storage - Message queues - Real-time
analytics - Leaderboards - Rate limiting

------------------------------------------------------------------------

## 2. Why Redis is Used in Backend

Redis improves backend performance by:

-   **Caching** frequently accessed data
-   **Reducing database load**
-   **Storing temporary data (sessions)**
-   **Handling queues and background jobs**
-   **Providing real-time features like chat or notifications**

Architecture example:

Client → Backend Server → Redis (Cache) → Database

------------------------------------------------------------------------

## 3. Persistence

Persistence means **data remains saved even after the system restarts**.

Redis normally stores data in memory but supports persistence using:

### RDB (Redis Database Snapshot)

-   Saves snapshots of the dataset periodically

### AOF (Append Only File)

-   Logs every write operation

------------------------------------------------------------------------

## 4. Why We Create a Server

A server is needed to:

-   Receive client requests
-   Process business logic
-   Connect to databases or caches
-   Send responses back to the client

Example architecture:

Browser → Node.js Server → Redis → Database

------------------------------------------------------------------------

## 5. Why Redis Needs a Client

Applications cannot talk directly to Redis memory.

A **Redis client**: - Connects to the Redis server - Sends commands -
Receives responses - Handles errors and reconnections

Example:

``` javascript
const redis = require("redis");
const client = redis.createClient();
await client.connect();
```

------------------------------------------------------------------------

## 6. Specifying Host and Port

Example connection:

``` javascript
const redis = require("redis");

const client = redis.createClient({
  socket: {
    host: "127.0.0.1",
    port: 6379
  }
});

await client.connect();
```

Default Redis port:

    6379

------------------------------------------------------------------------

# Redis Data Structures

Redis supports multiple data structures for different use cases.

------------------------------------------------------------------------

# 1. Strings

Simplest Redis data type.

Used for: - caching - counters - storing simple values

Example:

    SET name "Rahul"
    GET name

Methods:

  Command                   Description
  ------------------------- ---------------------------
  SET key value             store value
  GET key                   get value
  DEL key                   delete key
  INCR key                  increment number
  DECR key                  decrement number
  APPEND key value          append to string
  SETEX key seconds value   set value with expiration

------------------------------------------------------------------------

# 2. Lists

Ordered collection of elements (like arrays).

Used for: - queues - task processing - message pipelines

Example:

    LPUSH tasks "task1"
    LPUSH tasks "task2"
    LRANGE tasks 0 -1

Methods:

  Command                 Description
  ----------------------- ----------------------
  LPUSH key value         insert at beginning
  RPUSH key value         insert at end
  LPOP key                remove first element
  RPOP key                remove last element
  LRANGE key start stop   get list range
  LLEN key                list length
  LINDEX key index        get element by index

------------------------------------------------------------------------

# 3. Sets

Collection of **unique values** (no duplicates).

Used for: - unique users - tags - permissions

Example:

    SADD users "Rahul"
    SMEMBERS users

Methods:

  Command               Description
  --------------------- ------------------
  SADD key value        add element
  SMEMBERS key          get all members
  SREM key value        remove element
  SISMEMBER key value   check membership
  SCARD key             count members
  SUNION key1 key2      union of sets
  SINTER key1 key2      intersection

------------------------------------------------------------------------

# 4. Hashes

Stores field-value pairs inside a key (similar to objects).

Used for: - user profiles - structured objects

Example:

    HSET user:1 name "Rahul"
    HSET user:1 age 22
    HGET user:1 name

Methods:

  Command                       Description
  ----------------------------- -----------------------
  HSET key field value          set field
  HGET key field                get field
  HGETALL key                   get all fields
  HDEL key field                delete field
  HEXISTS key field             check if field exists
  HINCRBY key field increment   increment field value

------------------------------------------------------------------------

# 5. Sorted Sets (ZSets)

Set where each value has a **score used for sorting**.

Used for: - leaderboards - rankings - priority queues

Example:

    ZADD leaderboard 100 Rahul
    ZADD leaderboard 200 Amit
    ZRANGE leaderboard 0 -1 WITHSCORES

Methods:

  Command                       Description
  ----------------------------- ------------------------
  ZADD key score value          add element with score
  ZRANGE key start stop         get sorted range
  ZREVRANGE key start stop      reverse sorted range
  ZREM key value                remove element
  ZSCORE key value              get score
  ZCARD key                     count elements
  ZINCRBY key increment value   increase score

------------------------------------------------------------------------

# Quick Redis Data Structure Summary

  Type         Use Case
  ------------ -----------------------------
  String       caching and simple values
  List         queues and job processing
  Set          unique collections
  Hash         objects and structured data
  Sorted Set   rankings and leaderboards

------------------------------------------------------------------------

# Basic Redis + Node.js Workflow

1.  Install Redis
2.  Install Redis client in Node.js
3.  Connect to Redis
4.  Store and retrieve data
5.  Use Redis for caching or fast lookups

Example:

``` javascript
await client.set("user", "Rahul");
const value = await client.get("user");
console.log(value);
```

------------------------------------------------------------------------

# Final Key Points

-   Redis is an **in-memory key-value store**
-   Extremely fast because it uses RAM
-   Supports multiple **data structures**
-   Used heavily in **backend systems for caching and performance**

1. Strings

The simplest Redis data structure.

Used for:

caching
counters
storing values

Example:

SET name "Rahul"
GET name
String Methods
Command	Description
SET key value	Store value
GET key	Get value
DEL key	Delete key
INCR key	Increment integer
DECR key	Decrement integer
APPEND key value	Append to value
SETEX key seconds value	Set value with expiration

Example:

SET count 10
INCR count
2. Lists

Lists are ordered collections of elements.

Used for:

queues
task lists
job processing

Example:

LPUSH tasks "task1"
LPUSH tasks "task2"
LRANGE tasks 0 -1
List Methods
Command	Description
LPUSH key value	Insert at beginning
RPUSH key value	Insert at end
LPOP key	Remove first element
RPOP key	Remove last element
LRANGE key start stop	Get list elements
LLEN key	List length
LINDEX key index	Get element by index

Example:

LPUSH queue job1
RPUSH queue job2
LRANGE queue 0 -1
3. Sets

Sets store unique values (no duplicates).

Used for:

unique users
tags
permissions

Example:

SADD users "Rahul"
SADD users "Amit"
SMEMBERS users
Set Methods
Command	Description
SADD key value	Add element
SMEMBERS key	Get all members
SREM key value	Remove element
SISMEMBER key value	Check membership
SCARD key	Count elements
SUNION key1 key2	Union of sets
SINTER key1 key2	Intersection

Example:

SADD tags redis
SADD tags database
SMEMBERS tags
4. Hashes

Hashes store field-value pairs inside a key.

Used for:

user profiles
objects
structured data

Example:

HSET user:1 name "Rahul"
HSET user:1 age 22
HGET user:1 name
Hash Methods
Command	Description
HSET key field value	Set field value
HGET key field	Get field value
HGETALL key	Get all fields
HDEL key field	Delete field
HEXISTS key field	Check if field exists
HINCRBY key field increment	Increment field value

Example:

HSET user:1 name Rahul
HSET user:1 age 22
HGETALL user:1
5. Sorted Sets (ZSets)

Sorted sets are sets where each value has a score used for sorting.

Used for:

leaderboards
rankings
priority queues

Example:

ZADD leaderboard 100 Rahul
ZADD leaderboard 200 Amit
ZRANGE leaderboard 0 -1 WITHSCORES
Sorted Set Methods
Command	Description
ZADD key score value	Add element with score
ZRANGE key start stop	Get sorted elements
ZREVRANGE key start stop	Reverse sorted order
ZREM key value	Remove element
ZSCORE key value	Get score
ZCARD key	Count elements
ZINCRBY key increment value	Increase score

Example:

ZADD scores 10 player1
ZADD scores 20 player2
ZRANGE scores 0 -1 WITHSCORES
Redis Data Structure Summary
Data Structure	Use Case
String	caching and counters
List	queues and tasks
Set	unique values
Hash	objects
Sorted Set	rankings and leaderboards
Redis + Node.js Basic Workflow
Install Redis
Install Redis client in Node.js
Connect to Redis
Store and retrieve data
Use Redis as cache

Example:

await client.set("user", "Rahul");

const value = await client.get("user");

console.log(value);
Key Takeaways
Redis is an in-memory key-value store
Extremely fast because it uses RAM
Supports multiple data structures
Used heavily in backend systems
Commonly used with Node.js for caching