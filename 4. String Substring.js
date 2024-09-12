function stringSubstring (searched, text){
//let wordCase = searched.toLowerCase();

// for (let word of text.split(` `)){
//     if (word.toLowerCase()===wordCase){
//         console.log(wordCase);
//         break;
//     }else{
//         console.log(`${searched} not found!`);
//         break;
//     }
// }
if (text.toLowerCase().includes(searched.toLowerCase())){
    console.log(searched);
}else{
    console.log(`${searched} not found!`);
    
}
console.log();
}
stringSubstring('javaScript',
'Javacript is the best programming language');
