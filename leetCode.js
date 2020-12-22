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