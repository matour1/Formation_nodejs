const { error } = require('console');
const fs = require('fs')


function gemerFacture(){
    const facture = {
        client:"nom du client",
        article:[
            {nom:"article 1", quantite: 2, prixUnitaire:1000},
            {nom:"article 2",quantite: 1, prixUnitaire: 200}
        ],
        montantTotal : 0,
    };
    facture.montantTotal = facture.article.reduce((total, article) => total + (article.quantite * article.prixUnitaire),0);

    sauvergarderFacture('facture.json', facture)

}

function sauvergarderFacture(fils, facture){
    fs.writeFile(fils, JSON.stringify(facture, null, 2),(err)=>{
        if(err){
            console.error(`une erreur est survenue ${err}`);
        }else{
            console.log(`fichier enregistre sur le nom de ${flis}`)
        }
        
    })
}

gemerFacture();