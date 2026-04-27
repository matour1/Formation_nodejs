const data = require('./data.json') //pour importe nor donne du fichier json

// on utilise forEarch parceque ces un tableau

data.produits.forEach(produit =>{
    console.log(`ID : ${produit.id},NOM : ${produit.nom},PRIX : ${produit.prix}, STOOK: ${produit.stock}`);
})

