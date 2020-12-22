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