async function delay(seconds=1){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log(`after ${seconds}`)
            res();
        }, 1000*seconds);
    })
}
async function display(){
    console.log('first');
    await delay(2)
    console.log('second');
}
display()