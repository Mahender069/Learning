function delay(seconds=1){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log('hello');
            res();
        }, 1000*seconds);
    })
}
function divide(a,b){
    return new Promise((res,rej)=>{
        if(b==0){
            rej('Arithmetic Error')
        }
        else{
            res(a/b);
        }
    })
}
divide(3,0)
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    })