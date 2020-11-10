function fizzBuzz(n) {
    // Write your code here
    n = 65;
    let arr = [];
    for (let i = 0; i <n.length; i ++){
        if((i % 3 === 0) && (i % 5 === 0) ) {
            // arr += "FizzBuzz"
            arr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            // arr += "Fizz"
            arr.push("Fizz")
        } else if(i % 5 === 0){
            // arr += "Buzz"
            arr.push("Buzz")
        } else {
            // arr += n[i]
            arr.push(i)
        } 
        arr.push('\n')
        // arr += "\n"
    }

    console.log(arr)
}