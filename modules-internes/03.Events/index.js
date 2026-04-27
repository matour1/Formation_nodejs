//elle permet l=de cree un system de gestion des evenement dans notre app 

//on vas cree un emeteur evenement

const EvenEmitter = require('events')

const monEmitter = new EvenEmitter();

monEmitter.on('eventNom', ()=>{
    console.log('un evenement du nom de eventNom a ete emis')
})

//pourque sa emme ajoute

monEmitter.emit('eventNom'); //afficher emetter

