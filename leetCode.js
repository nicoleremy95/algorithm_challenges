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