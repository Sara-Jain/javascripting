const s = 'This is is a sample string';
repeatingWords(s);

function repeatingWords(s) {
    const words = s.split(' ');
    let flag = false;
    const wordMap = new Map();
    for (let index = 0; index < words.length; index++) {
        if (wordMap.has(words[index])) {
            flag = true;
        } else {
            wordMap.set(words[index], 1);
        }
    }
    if (flag) {
        console.log("String contains repeating words");
    } else {
        console.log("Strings does not contain repeating words");
    }
}