//il sont utilise pour gere des operation asynchrone .
//utilise losqu il y a des operation qui vont prendre du temp a etre executer par exemple la lecture  un fichier, ou requete a une base de donner


function doChoose(callback){
    setTimeout(function(){
        callback("resultat de l'operation");
    },2000)
}

doChoose(function(resultat){
    console.log(resultat);
})

//dans cette exemple dochoose() est un function de rappelle en argument pour silule un operation asynchrome a l aide de setTimeaout
//une foie operation terminer il place le resultat en argument et affiche le resultat de de aperation dans un intervall de 3s pour notre cas

