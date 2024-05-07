const fs = require('fs');

let data = '';

let readerStream = fs.createReadStream('./input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
});

readerStream.on('error', (error) => {
    console.log(error.stack);
});

console.log('Program Ended');
