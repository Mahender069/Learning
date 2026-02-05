function a(){
    console.log('second');
}
function c(){
    console.log('third');
}
function b(a){
    console.log('first');
    a();
}
b(c);