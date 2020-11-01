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


function staircase(n) {
    //array 1 or arr[0] must have n-2 # or n-2 spaces 
    //array 2 or arr[1] must have n-1 # or n-1 spaces
    //array 3 or arr[2] must have n-0 # or n-n spaces 
 
    let output = ''
    //calculate the number of rows 
    for (let i = 1; i <= n; i++) {
        //calculat the number of spaces per row 
        for (let s = n - 1; s >= i; s--) {
            output += ' '
        }
        //calculate the number of # per row 
        for (let h=1; h<=i; h++){
            output += '#'
        }
        //start a new line after every row 
        output += "\n"
    }
    //print the output 
    console.log(output);
}


function miniMaxSum(arr) {
    //find the smallest and largest 4 of the 5 integers and add them sort, pop, reduce method
    //print each value with a space inbetween 
 
    let initialMax = 0;
    let initialMin = 0;
    const reducer = (accumulator, item) => {
        return accumulator + item;
    };
 
    //calcuate the max
    let descending = [...arr].sort((a,b)=> b-a);
    descending.pop();
 
    const max = descending.reduce(reducer, initialMax);
 
    //calculate the min
    let asscending = [...arr].sort((a,b)=> a-b);
    asscending.pop();
 
    const min = asscending.reduce(reducer, initialMin);
    
    //print values
    console.log(min + " " + max);
 
}
 
function birthdayCakeCandles(candles) {
    // take array and sort, then filter to find duplicate
    // take the length of the new array
   
 
    candles.sort((a,b) => b-a);
 
    return candles.filter(candle=> candle === candles[0]).length;
 
}

function gradingStudents(grades) {
    // Write your code here
    let output= [];
    //conditional statement 
    for (let i=0; i<grades.length; i ++){
        let rounded = Math.ceil(grades[i]/5)*5
        let diff = rounded - grades[i]
        if(grades[i] < 40){
            ouput += grades[i]
        } else if (grades[i]>40 && diff<3){
            output += rounded
        } else if (grades[i]>40 && diff>3){
            output+= grades[i]
        } else if (grades[i]=100){
            output+= grades[i]
        }
        output += '\n'
    }
    //print out final grades 
    console.log (output);
}