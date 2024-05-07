const fs = require('fs');
let data = 'Simply Easy Learning';

let writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', () => {
    console.log("Write completed");
});

writerStream.on('error', (error) => {
    console.log(error.stack);
});

console.log('Program Ended');
