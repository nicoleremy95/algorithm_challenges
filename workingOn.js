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
    
    // divisibleArr.sort((a,b) => a-b)
    let finalArr = [];
    for (let i = 0; i<divisibleArr.length; i ++){
        // for (let j = 0; j<divisibleArr.length; j ++){
            if(divisibleArr[i] === divisibleArr[i][i+1]){
                finalArr.push(i)
            }
    }
   
    return finalArr;
}

function repeatedString(s, n) {
    let counter = 0;
    let numOfA = n;
    
    if(s.includes('a')){
        if(s === 'a'){
            return numOfA;
        } else {
            let originalArray = s.split('');
            let newArray= [];
            
            for (let i = 0; i < n; i ++){
                if(newArray.length < n){
                    newArray.push(originalArray[i%originalArray.length])
                }            
            }
            for (let i = 0; i < newArray.length; i ++){
                if (newArray[i] === 'a'){
                    counter ++;
                    numOfA = counter;
                }
            }   
        }
    } else {
        numOfA = 0;
        return numOfA;
    }

    //return a number representing the number of 'a'
    return numOfA;
}


function minimumBribes(q) {
    let bribes = 0;
    for (let i = 0; i < q.length; i ++){
        if(q[i]-q[i+1] == 1){
            bribes += 1
        } else if (q[i]-q[i+1] == 2){
            bribes += 2
        } else if (q[i]-q[i+1] > 2) {
            console.log("Too chaotic")
            return;
        }
    } 
    console.log(bribes) ;
}
