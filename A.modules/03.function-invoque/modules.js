//avec les function invoque la synthaxe change
//exemple
(function(){ //cette function est definir comme une function anonime invoquer
    const localvar = "je suis une variable";
    module.exports = {
        getlocalvar: function(){ //rend la function comme une expression
            return localvar;
        }

    }
})() //var invoque la function sans sa sa ne marche par