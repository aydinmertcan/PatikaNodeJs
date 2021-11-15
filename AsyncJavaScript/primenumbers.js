const arguments = process.argv.slice(2);
function primeNumbers(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i++) {
        let isPrime = true;
        for(let j = 2; j < highNum; j++){
            if(i % j === 0 && j !== i) {
                isPrime = false;
            }
        }
        if(isPrime)
            console.log(i); 
    }
}
primeNumbers(arguments[0]*1,arguments[1]*1);
