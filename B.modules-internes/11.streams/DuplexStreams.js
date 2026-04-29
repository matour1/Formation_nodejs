//ici on parle du duplexStreams qui permet en ment temp d ecrire et de lire des donne

const {Duplex} = require('stream')

const myDuplexStram = new Duplex({
    write(chunk , encoding, callback){
        console.log(`donnee recu: ${chunk,toString()}`);
        callback()
    },
    read(){

    }
})

myDuplexStram.write('ReyDev')
myDuplexStram.end()

myDuplexStram.on('data', (chunk)=>{
    console.log(`data : ${chunk.toString()}`)
})

myDuplexStram.on('end',()=>{
    console.log("operation terminer")
})

//ceux vas donne un le resultat object undifiner car je ne donner un fichier a trater