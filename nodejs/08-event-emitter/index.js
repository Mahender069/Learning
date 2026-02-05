const EventEmitter = require('events');

const Emitter=new EventEmitter();


//listener
Emitter.on('message',(message,a,b)=>{
    console.log(message);
    console.log(a+b);
})


Emitter.emit('message','mahender',22,10)