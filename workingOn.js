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
