const EvenEmitter = require('events')

class uneClass extends EvenEmitter{
    constructor(){
        super();
    }
    dochoose(){
        console.log('faire quelque chose')
        this.emit('actionEffectue','action a ete effectuer avec succes');
    }
}

const object = new uneClass();

object.on('actionEffectue',(message)=>{
    console.log(message);
})

object.dochoose();