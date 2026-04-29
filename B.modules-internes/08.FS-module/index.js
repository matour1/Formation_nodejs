//ceux module nous permet de travail avc le systemee de fichier du systeme explotation
//et applique le CRUD

const { error } = require('console')
const fs = require('fs')

//sa marche pour inporte le que fichier

//ici sa permet la lecture d un fchier 

fs.readFile('myfils.txt','utf-8', (err, data) =>{ //presiser encodage
    if(err){
        console.error(`errreur lors de la lecture de ${err}`);  //pour prevenir les erreur
    }

    console.log(`contenu: ${data}`); //affiche les fichier des donne
})

 //on peut aussi ecrit dans un fichier je vas editer le fichie exe.txt

fs.writeFile('exe.txt','contenu a ajouter dans le fichier',(err)=>{
     if(err){
        console.error(`errreur lors de la reecriture de ${err}`);  //pour prevenir les erreur
    }
     console.log(`reecriture reussi`);

     //tu peut utilise la instruction precedand pour affichier les modification
     fs.readFile('exe.txt','utf-8', (err, data) =>{
    if(err){
        console.error(`errreur lors de la lecture de ${err}`);  //pour prevenir les erreur
    }

    console.log(`contenu: ${data}`); //affiche les fichier des donne
})
})

// //ici je vais cree un fichier que je vais supremer un fichier appele fils
// //intruction pour suprimer un fichier

fs.unlink('fils.txt',(err)=>{
     if(err){
        console.error(`errreur lors de la suppression de ${err}`);  //pour prevenir les erreur
    }

    console.log('supression reussi');
})

// intruction pour renommer un fichier

fs.rename('modif.txt', 'newname',(err)=>{
     if(err){
        console.error(`errreur lors renomme du ${err}`);  //pour prevenir les erreur
    }

    console.log('fichier renomme');
})

//cree un dossier

fs.mkdir('newdossier', (error)=>{
     if(err){
        console.error(`errreur le dossier ${err} na pas plus etre cree`);  //pour prevenir les erreur
   }

    console.log('dossier cree avec succes'); 
})

//ici tu peut aussi lire le dossier

fs.readdir('.',(err, fichier)=>{ // pout lire tous les fichier du dossier
     if(err){
        console.error(`errreur lors de la lecture ${err}`);  //pour prevenir les erreur
   }

   console.log(`contenu: ${fichier}`);
})

//INFO: par defaut tous ces fonction est execute de manier asynchrone par default et si tu veux que elle execute de manier synchrone tu ajoute
// sync devant le function


