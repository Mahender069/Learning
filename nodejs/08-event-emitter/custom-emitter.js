const EventEmitter=require('events');

class Myclass extends EventEmitter{
    constructor(){
        super();
        this.greeting='hello'
    }
    myMethod(name){
        this.emit('onthis',`${this.greeting}, ${name}`)
    }
}

const emitter=new Myclass()
emitter.on('onthis',(input)=>{
    console.log(input);
})

emitter.myMethod('onthis');