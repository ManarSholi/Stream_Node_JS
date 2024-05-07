const fs = require('fs');

let readerStream = fs.createReadStream('input.txt');

let writerStream = fs.createWriteStream('piping_output.txt');

readerStream.pipe(writerStream);
console.log('Program Ended');
