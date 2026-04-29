const fs = require('fs')

const zlib = require('zlib') //untiliser pour compresse les dossier

const readableStream = fs.createReadStream('flis.txt','utf-8')

const writableStream = fs.createWriteStream('monfichier.zip')

const gzipStream = zlib.createGzip();

readableStream.pipe(gzipStream).pipe(writableStream)

//#le resultat est que le fichier fils.txt sera compress