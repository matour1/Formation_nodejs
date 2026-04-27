// les wrapper module est une technique de programation qui  permet
//envelopper un un module dans un autre couche de code en fin de le manipule et modifier son comportenent sans le modifier

const modules = require('./modules')

function addWithlogging(a,b){
    console.log(`Adding ${a},${b}`);  //module modifier
    return modules.add(a,b)
}

module.exports = {addWithlogging};

console.log('Before');
const resultat = addWithlogging(2,3)
console.log('After');
console.log(`resultat: ${resultat}`);