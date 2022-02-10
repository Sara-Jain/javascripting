let num = 500;
printArmstrong(num);
function isArmstrong(i){
    let temp = i;
    let sum = 0;
    while (temp > 0) {
        let lastDigit = temp % 10;
        sum += lastDigit * lastDigit * lastDigit;
        temp = parseInt(temp / 10);
    }
    if (sum === i) {
        return true;
    }
    else {
        return false;
    }
}

function printArmstrong(num){
    for(let i=1 ; i<=num ; i++){
        if(isArmstrong(i)){
            console.log(i);
        }
    }
}

