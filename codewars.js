//Directions Reduction
function dirReduc(arr){
    //edge case
    if(arr.length <= 1) return arr;
    
    //create empty stack
    let stack = [];
  
    //for loop
    for(let i = 0; i < arr.length; i ++){
        //if the stack length is 0, add the current element to the stack
        if(stack.length < 1){
            stack.push(arr[i])
        } else {
            //using the last item in the stack, compare it to the current element
            let stackLastIdx = stack.length-1
            if(arr[i] === "WEST" && stack[stackLastIdx] === "EAST" || arr[i] === "EAST" && stack[stackLastIdx] === "WEST" 
            || arr[i] === "SOUTH" && stack[stackLastIdx] === "NORTH" || arr[i] === "NORTH" && stack[stackLastIdx] === "SOUTH"){
                //pop the last element in the stack if it is the opposite of current element 
                stack.pop();
            } else {
                //push the current element into the array
                stack.push(arr[i])
            }
      }
    }
    
    return stack;
  
  }