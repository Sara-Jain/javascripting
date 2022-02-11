const s = 'This is is a sample string';
repeatingWords(s);

function repeatingWords(s){
    const words = s.split(' ');
    let flag = false;
    const wordMap = new Map();
    for(let i=0 ; i<words.length ; i++){
        if(wordMap.has(words[i])){
            flag = true;
        }else{
            wordMap.set(words[i] , 1);
        }
    }
    if(flag){
        console.log("String contains repeating words");
    }else{
        console.log("Strings does not contain repeating words");
    }
}