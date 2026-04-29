const iconv = require('iconv-lite')


const isopString = 'cafe au lait: cafe:🍥';

console.log(isopString)

//type encodage
//utf8 pour represente un icon
//utf 16 utilise 16bit par caractere
//utf 32
//iso-8859-1

const utf8string = iconv.decode(Buffer.from(isopString, 'binary'), 'isa-8859-1').toString('utf-8');

console.log(utf8string); // la sa ne doit par affichier le meme resulat 


// pour dire en fonction du type encodage que tu utilise un peut affichier au non sertaine caractaire comme le utf-8 ne peut par affiche 
//cette emeji alors li iso ou car elle genere encodeage de tous les caracter qui existe