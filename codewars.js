//Directions Reduction
function dirReduc(arr){
    if(arr.length <= 1) return arr;
    
    let stack = [];
  
    for(let i = 0; i < arr.length; i ++){
      if(stack.length < 1){
        stack.push(arr[i])
      } else {
        let stackLastIdx = stack.length-1
        if(arr[i] === "WEST" && stack[stackLastIdx] === "EAST" || arr[i] === "EAST" && stack[stackLastIdx] === "WEST" 
           || arr[i] === "SOUTH" && stack[stackLastIdx] === "NORTH" || arr[i] === "NORTH" && stack[stackLastIdx] === "SOUTH"){
          stack.pop();
        } else{
          stack.push(arr[i])
        }
      }
    }
    
    return stack;
  
  }