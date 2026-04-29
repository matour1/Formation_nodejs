//plusque ces module sont deja installer par defaul on peut directement les import

//NB: elle fonctionne de la meme fason peut importe de systeme explotation

const path = require('node:path');

console.log(path); // pour affichier tous les function prise en charge par nodejs on vas explique

console.log(path.basename(__filename)); //affiche le dernier fichie lu
console.log(path.basename(__dirname));  //affiche le dernier dossier lue

console.log(path.extname(__filename)); //affiche extention du fichier
console.log(path.extname(__dirname));  //affiche  extention du dossier

console.log(path.parse(__filename)); //sa renvoi un object contenant les element d un object(repertoire, racine, nom du fichier,extension)

console.log(path.format(path.parse(__filename))); // renvoie le chemin acces au fichier actuel

console.log(path.isAbsolute(__filename)); //sa permet de verifier si un chemin est absolue ou non true/false

console.log(path.resolve("folder1","folder2","index.html")); //elle resoud les chemin a une chaine de caractaire

console.log(path.join("folder1","folder2","index.html")); //est utilise pour concatener les fichier passer et normalise le chemin resultant util pour cree de fichier des chemin de fichier des repertoire


