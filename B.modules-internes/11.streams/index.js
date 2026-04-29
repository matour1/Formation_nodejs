//#transforme streams

const {tranform} = require('stream')


const uppercaseTransfornStream = new tranform({
    tranform(chunk , encoding, callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    },
    
})


process.stdin.pipe(uppercaseTransfornStream).pipe(process.stdout)

//on un trabsform sream que on a cree pour transforme les carater en majiscule

