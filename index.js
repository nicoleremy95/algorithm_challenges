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

function gradingStudents(grades) {
    // Write your code here
    let output = [];
    //conditional statement 
    for (let i=0; i<grades.length; i ++){
        let rounded = Math.ceil(grades[i]/5)*5
        let diff = rounded - grades[i]
        if (grades[i]>=38 && diff<3){
            output.push(rounded)
        } else if (grades[i]>=38 && diff>3){
            output.push(grades[i])
        } else {
            output.push(grades[i])
        }
    }
    //print out final grades 
    return output;
}


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //for each element in the apple and orange array you must add a or b respesctivelly 
    //then see if they fall within house range s<=location<=t

    // const numApples = apples.map(apple => apple + a).filter(item => s <= item <= t).length;
    // const numOranges = oranges.map(orange => orange + b).filter(item => s <= item <= t).length;

    const applesMap = apples.map(apple => apple + a);
    const applesNum = applesMap.filter(item => item >= s && item <= t).length;

    const orangesMap = oranges.map(orange => orange + b);
    const orangesNum = orangesMap.filter(item => item >= s && item <= t).length;

    // //print on new line
    console.log(applesNum + '\n' + orangesNum)

}
    


function kangaroo(x1, v1, x2, v2) {
    //assume that they never meet at the same spot 
    let sameTime = 'NO';
    
    //now say that they they will meet at the same spot to at i 
    for (let i = 0; i < 10000 && sameTime === 'NO'; i++) {
        if (x1 + v1 * i == x2 + v2 * i) {
            sameTime = 'YES';
        }
    }
    //return the answer outside of the for loop
    return sameTime;
}

function getTotalX(a, b) {
    //ex. a = [2,4]
    //ex. b = [16,32, 96]
    // Write your code here
//     You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered a%i
// The integer being considered is a factor of all elements of the second array i%a
    let divisibleArr = [];
    for (let j = 0, k = 0; j < a.length, k < b.length; j ++, k ++){
        for (let i = 0; i <= 100; i++){
            if ((i % a[j] === 0) && (b[k] % i === 0)){
                    // if(!divisibleArr.includes(i)){
                        divisibleArr.push(i); 
                    // }
            } 
        }        
    }
    
    
}

function sockMerchant(n, ar) {
    let pairs = 0;
    let count;
    let sortedAr = ar.sort( (a,b) => a - b)
    
    for (let i = 0; i < n-1 ; i ++){
        if(sortedAr[i]===sortedAr[i + 1]){
            pairs ++;
            i += 1;
        }
        
    }

    return pairs;
}

function countingValleys(steps, path) {
    // Write your code here
    
    //set valleys and counter to zero
    let valleys = 0;
    let counter = 0;
    
    //loop through each value in the path
    for (let i = 0; i < steps ; i ++){ 
        //if the hiker travels uphill, then check if the elevation is -1, if so, then it is a valley, and add to the counter afterwards 
        if (path[i]==='U'){
            if (counter == -1){
                valleys ++
            }
            counter ++; 
        }  else if (path [i] ==='D'){
            counter --;
        } 
    }
    
    
    return valleys 

}
