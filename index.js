function simpleArraySum(ar) {
    const initialValue = 0;
 
    const reducer = (accumulator, item) =>{
        return accumulator + item;
    }
 
    const total = ar.reduce(reducer, initialValue)
 
    return total;
 
}
