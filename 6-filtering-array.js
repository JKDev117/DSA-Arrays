/* 6. Filtering an array

Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. 

DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

*/

const array = [1, 2, 3, 4, 5, 6, 7]

function filterArray(array){ //O(n)
    const temp = []
    for(let num of array){
        if(num >= 5){
            temp.push(num)
        }
    }
    return temp
}


console.log(filterArray(array))

//node 6-filtering-array
