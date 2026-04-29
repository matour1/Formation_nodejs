//ici on vas par du readableStream
//pour la lecture


const console = require('console');
const fs = require('fs')

const readableStreams = fs.createReadStream('files.txt','utf-8')

readableStreams.on('data',(chunk)=>{
    console.log(`chuk des data: ${chunk}`);
})

readableStreams.on('end',()=>{
    console.log("Operation terminer");
})

readableStreams.on('error',(err)=>{
    console.error(err);
})