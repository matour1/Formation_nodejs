//les buffer sont utiliser pour manipule des donne binaire \
//Avec nodejs ces une class integre qui donne la manier de monipules les donnee binaire
//exemple

const buffer1 = Buffer.from('hello')
const buffer2 = Buffer.alloc(5)

console.log(buffer1, buffer2);

//resultat de executiion  
//<Buffer 68 65 6c 6c 6f> <Buffer 00 00 00 00 00>  ces la representation exadecimal des donne staker dams les buffer
//dans cette exemple on peut interpreter comme ce si:
//h=b8 octet e=65 octect l=6c octect 0=6f octect
//et pour les number on a sa donc 5 octect avec des valeur null