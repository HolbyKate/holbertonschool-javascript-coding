#!/usr/bin/node

const args = process.argv[2]
const fs = require('fs');
fs.readFile(args, 'utf8', (err, data)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
