function simpleArraySum(ar) {
    const initialValue = 0;
 
    const reducer = (accumulator, item) =>{
        return accumulator + item;
    }
 
    const total = ar.reduce(reducer, initialValue)
 
    return total;
 
}


function diagonalDifference(arr) {
    // Write your code here
    const lengthDiagonal = arr.length;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let sum = 0;
 
    for (let i=0; i<lengthDiagonal; i++){
        firstDiagonalSum += arr[i][i];
        secondDiagonalSum += arr[lengthDiagonal -1 -i][i]
    }
    sum = (firstDiagonalSum-secondDiagonalSum);
 
    if(sum>0) {
        return sum
    } else if (sum<0) {
        return sum * -1
    } else {
        return 0
    }
}


// Complete the plusMinus function below.
function plusMinus(arr) {
    let positiveNum = 0;
    let negativeNum = 0;
    let zeroNum = 0;
    let denominator = arr.length;
 
    if(denominator>0 && denominator<=100){
        arr.map(element=>{
            if(element>0){
                positiveNum ++
            } else if(element<0){
                negativeNum ++
            } else {
                zeroNum ++
            }
 
            return element
        })
        
  
  };
    
    let positiveDecimal = positiveNum/denominator;
    let negativeDecimal = negativeNum/denominator;
    let zeroDecimal = zeroNum/denominator;
 
    let roundedPos = positiveDecimal.toFixed(6);
    let roudnedNeg = negativeDecimal.toFixed(6);
    let zeroNeg = zeroDecimal.toFixed(6);
 
    console.log (roundedPos);
    console.log (roudnedNeg);
    console.log (zeroNeg);
    
}
