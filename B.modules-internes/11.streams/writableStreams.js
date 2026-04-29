//les treams sont des fonctionnalite permetant de lire et d 'ecrire des donnee a partie de fichie, soket resau ,ou autre flux de donnee

//elle permet de manipule des donnee petit ou gros volume de donnee 

//un streams est un sequence de donne divise en petit morseau chunk et elle permet de lire les donne de manier progressive sana avoir a 
//a les charge entierement en memoire

//#1.writablestream

const fs = require('fs')

//on vas commence par ecrire don un fichier

const writableStream = fs.createWriteStream('files.txt', 'utf-8');


writableStream.write('bonjour,etud')
writableStream.write('Bienvenue a ceux cour sur node')
writableStream.end()  //pour marquer la fin

//ecouter evennement

writableStream.on('finish',()=>{
    console.log("operation terminer")
})

writableStream.on('error',()=>{
    console.error(erro);
})
