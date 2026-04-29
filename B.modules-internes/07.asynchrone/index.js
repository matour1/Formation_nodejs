//function synchrone

function fontionsync(){
    console.log("debut de la function synchrone");
    for(let i = 0;i < 5 ; i++){
        console.log(`traitement des donnee ${i}`);

    }

    console.log("fin de la function synchrone");
}

console.log(" function synchrone");
fontionsync();
console.log("ap function synchrone");

//les intruction execute a la suite des autre donc ici chaque log vs affichier a la suite des autre


//function asynchrone

function fontionasync(){
    console.log("debut de la function asychrone");
    setTimeout(()=> {
        console.log("traitement 1");
        console.log("connection");
    },3000);
    setTimeout(()=> {
        console.log("traitement 2");
    },6000);
    setTimeout(()=> {
        console.log("traitement 3");
    },9000);
    setTimeout(()=> {
        console.log("traitement 4");
    },12000);
    console.log("fin de la function asynchrone");
    
}
console.log("avant la function asynchrone")

fontionasync();

console.log("apre la function asynchrone")

//ici chaque log var affichier a des time donne sans toute foi inpacter execution des autre instruction



