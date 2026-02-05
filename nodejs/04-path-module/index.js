const path=require('path')

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

const joinedPath=path.join('usr','projects','hello.js')
console.log(joinedPath);

console.log(path.resolve('index.js'));


console.log(path.normalize('usr/home//projects/../file.txt'));