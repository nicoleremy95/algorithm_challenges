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
