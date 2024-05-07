const fs = require('fs');
let zlib = require('zlib');

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File compressed.');

// Decompress the file input.txt.gz
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input_decompressed.txt'));

console.log('File Decompressed.');
