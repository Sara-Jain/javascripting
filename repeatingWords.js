let s = 'This is is a sample string';
let words = s.split(' ');
let flag = false;
const map1 = new Map();
let j=0;
for(let i=0 ; i<words.length ; i++){
    if(map1.has(words[i])){
        flag = true;
    }else{
        map1.set(words[i] , 1);
    }
}
if(flag){
    console.log("String contains repeating words");
}else{
    console.log("Strings does not contain repeating words");
}