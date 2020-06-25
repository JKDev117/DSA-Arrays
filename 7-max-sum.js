/* 7. Max sum in the array

You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12
*/

const array = [4, 6, -3, 5, -2, 1]

let ticks = 0

function maxSum(array){ //O(n) ?
    ticks++
    let sum = 0
    let max = 0
    for(let i of array){
        ticks++
        sum+=i
        if(sum > max){
            max=sum
        }
    }
    return max
}

console.log(maxSum(array)) //=> 12
console.log(ticks) //=> 7

//node 7-max-sum