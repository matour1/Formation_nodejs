//ici les function au lieu utilise un collback utilise les promesse et permet de gere proprement les operation asynchrone

//sa faire la presque la meme chopse que les FS
const fsPromises = require('fs').promises;

fsPromises.readFile('fils.txt','utf-8')
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
//lecture tufichoer

//ici fsPromises renvoie une promesse qui serai resolut avec les donne lu then losque le fichier es lu avec susser 
//catch losquil y a une erreur

// par la suite on vas utilise async eve utilise pour specifier si la function sera syschrone ou asynchrone
async function lirefile(){
    try{
        const data = await fsPromises.readFile('fils.txt','utf-8'); //await pour atendre que la promese soit resolut
        console.log(data);
    } catch(err){
      console.error(err);
    }
}
lirefile();

//ici cette function et ceux style de code en respectant le style de la programmation synchrone tous en en utilisant les les propriete asynchrone 