// buffers->objects(used to handle binary data);

const buff=Buffer.alloc(10)// allocates 10 bytes -> initially all are zeros
console.log(buff);

// creating a 
const buffFromString=Buffer.from('Mahender')
console.log(buffFromString);


const buffArray=Buffer.from([1,2,3,4,5]);

console.log(buffArray);


//writing a buffer

buff.write('hello mahender')
console.log(buff)
console.log(buff.toString())