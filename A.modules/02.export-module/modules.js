// les module exportation permet a node de rendre les function des object disponible
//pour etre utilise dans autre function javascript
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

//pour faire un exportation semble pour rentre un code reutilisable dans un autre fichier

exports.add = add;
exports.subtract = subtract;


//on peut aussi avoir des export nomer comme ceux si

module.exports = { //sa permet exporter plusieur element sans chaque foi ecrire export
    add,
    subtract
}