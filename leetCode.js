var findTarget = function(root,k){
    let current;
    if(root.val < k){
        var current = root;
        if(root.val <k){
            let nextVal = current.right;
            if(nextVal.val + current.val === k) return true;
        }

    }
}

//LeetCode Medium
var majorityElement = function(nums) {
    let newMap = {};
    let arr = [];
    
    for(let i of nums){
        newMap[i] = (newMap[i] || 0) + 1
    }
    
    for(let i in newMap){
        if(newMap[i] > nums.length/3){
            arr.push(i)
        }
    }
    return arr;
};

//LeetCode Easy
var isMajorityElement = function(nums, target) {
    let count = 0;
    //if target appears more than nums.length/2; return true
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] === target) {
            count ++;
        }
    }
    if (count > nums.length/2){
        return true;
    } else{
        return false;
    }
};

/*LeetCode Easy 
    time complexity: O(n)
    space complexity: O(n)*/
var majorityElement = function(nums) {
    
    let hashMap = {};
    
    for(let i of nums){
        hashMap[i] = (hashMap[i] || 0) + 1
    }
    
    for(let i in hashMap){
        if(hashMap[i] > nums.length/2){
           return i;
        }
    }  

};

/* LeetCode Easy
    time complexity: O(n)
    space complexity: O(1)
    **Note this code doesn't work if there are more than two numbers that occur the same amount of times*/
function findMajority(arr){
    let maj;
    let count = 0;
  
    for (let num in arr){
      if(count == 0){
        maj = arr[num]
        console.log(`maj, ${maj}`)
      }
      if(maj === arr[num]){
        count ++;
        console.log(`count, ${count}`)
      }
      else {
        count --;
        console.log(`maj: ${maj}, count: ${count}`)
      }
     
    }
     return maj;
  }
  
  findMajority([2, 5, 4, 3, 0, 4, 1, 7])



  //SHUFFLE ARRAY 
  var shuffle = function(nums, n) {
    /*
      1 create a new array
      2 loop through and put index 0 and index n, then increase each value by 1 
      3 push new elements into a new array
        newArr.push(nums[0]) newArr.push(nums[n])
    */
    //time complexity O(n)
    //space complexity O(n)
    let newArr = [];
    let x = 0;
    let y = n;
    
    for(let i = 0; i < n; i ++){
        newArr.push(nums[x]);
        newArr.push(nums[y]);
        x ++;
        y ++;
    }
    
    return newArr;
  }


  
var countCharacters = function(words, chars) {
    //initialize count
    let count = 0;

    //loop through each word in the words array; for loop
    for(let word of words){
         //loop through word in words and make hash
        console.log("word", word)
        let hash = {};
        let good;
        for(let char of word){
            hash[char] = (hash[char] || 0 ) + 1;
        }
        console.log("hash", hash)

        // loop through chars in char and subtract from the original hash
        for(let char of chars){
            hash[char] = (hash[char] || 0) -1;
        }
        console.log("char", hash)
       
        //loop through hash and if the value of each character is less than 1, then the word is a "good" string and set good to true
        for(let i in hash){
            if (hash[i] > 0) {
              good = false;
              break;
            }
            else {
              good = true;
            }
        }

        //if good is true, add to count 
        if(good === true){
          console.log("good === true")
          console.log("word length", word.length)
          count += word.length
          console.log("count", count)
        } else {
          console.log("good === false")
        }
    }
    
    return count;   
};

countCharacters(["cat","bt","hat","tree"], "atach");
// countCharacters(["hello","world","leetcode"], "welldonehoneyr");