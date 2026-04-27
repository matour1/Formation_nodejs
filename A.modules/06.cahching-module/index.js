//ces un mecanisme qui permet de metre en memoire le resultat d un module losquil est importer la premier foi

const module1 = require('./modules.js')
const module2 = require('./modules.js')

console.log(module1 === module2);

//sa signifie que plusque ces deux module sont indentique sa va les charche un seul foi
