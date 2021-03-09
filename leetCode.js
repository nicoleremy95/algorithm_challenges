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


var maxSubArray = function(nums) {
    let sum = 0;
    let largestNum = Math.max(...nums);
    //OR
    // let largestOutput = -9223372036854775808
    //OR
    // let largestOutput = -Number.MAX_SAFE_INTEGER - 1
    if(nums.length == 1) return nums[0];
    
    for (let i in nums) {
        sum += nums[i];
        if (sum >= largestNum) {
            largestNum = sum;
        }
        if (sum < 0) {
            sum  = 0;
        }

    }
    return largestNum;

};

var numberOfSteps  = function(num) {
    //1. set initial counter; let count = 0
    //2. set initial number; let number = num
    //2. while num > 0...see if num is even or odd
    //  1. if even, divide number by 2 and add 1 to count 
    //  2. if odd, subtract 1 from number and add 1 to count
    //3. when num == 0, return count 
    
    //WAY 1
    //     let count = 0;
        
    //     if(num == 0) return 0;
        
    //     while(num > 0){
    //         if(num % 2 == 0) num /= 2; 
    //         else num -= 1;
    //         count ++;
            
    //     } 
    //     return count;
   
    //WAY 2
    const binary = num.toString(2)
    console.log(binary)
    let count = binary.length-1;
    for(let i = 0; i <binary.length; i ++){
        if(binary[i] === "1") count ++;
    }
    return count;

};

var restoreString = function(s, indices) {
    // s = "codeleet", indices = [4,5,6,7,0,2,1,3]
     
     //1.create a new arr; let arr = [];
     //2.relate s[i] and indices[i] 
     //3.store value of s[i] as the index of indices[i] ex. str[4] = 'c';
     //3.After going through all s and indices, add to str 
     
     const arr = [];
     for(let i = 0; i<indices.length; i++) {
         arr[indices[i]] = s[i];
     }
     return arr.join('') 
 };

 var decompressRLElist = function(nums) {
    //nums 0, 2, 4, 6 etc ... are freq
    //nums 1,3,5, etc... are values 
    
    //create new array, let array = [];
    //loop through nums and create hash map
    //  if even index or 0, store as freq
    //  if odd index, store as value
    //  ex {freq:value}
    //loop through hash map and push new values into new array
    
    //have original array and mutate 
    
    let array = [];
    
    const times = x => f => {
      if (x > 0) {
        f()
        times (x - 1) (f)
      }
    };
    
    for(let i = 0; i <nums.length; i += 2){
      times (nums[i]) (() => array.push(nums[i+1]));
    };
    
    return array;
    
};

var countMatches = function(items, ruleKey, ruleValue) {
    // type 0,  color 1, name 2
    
    //find item where item has ruleKey and ruleValue
    //set counter ; let counter = 0
    
    //assign ruleKey index, ex. color is index 1
    //loop through items and find item[i]i
        //if item[i]i has the same value as the ruleValue, add 1 to counter
    
    let compare;
    let counter = 0;
    
    if(ruleKey === "type") compare = 0;
    if(ruleKey === "color") compare = 1;
    if(ruleKey === "name") compare = 2;
    
    for ( let i = 0; i < items.length; i ++){
        if(ruleValue === (items[i][compare])){
            counter ++;
        }
    }
    
    return counter;
};

var isPalindrome = function(head) {
    let arr = [];
    
    while(head!== null){
        arr.push(head.val);
        head = head.next;
    }
    
    
    const check = [...arr];
    check.reverse();
    console.log("array", arr)
    console.log("check", check)
    
    for(let i = 0; i <arr.length ; i ++){
        if(arr[i] !== check[i]) return false
        console.log(arr[i], check[i])
    }
    
    return true;
    
    
};