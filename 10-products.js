/* 10. Products

Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the 
numbers in the input array except for the number at each current index. See the following example input and output.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]

*/

function products(arr) { //O(n^2)
    let returnArray = []
    let products = 1;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(j!=i){
                products *= arr[j]
            }
        }
        returnArray.push(products)
        products = 1
    }
    return returnArray
}

const arr = [1, 3, 9, 4]

console.log(products(arr))

//node 10-products.js