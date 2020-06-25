/* 11. 2D array

Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];

*/

let ticks = 0

function TwoDimensionalArray(array){ //O(n)
    ticks++
    for(let i of array){
        ticks++
        if(i.includes(0)){
            i.fill(0)
        }
    }
    return array
}


const array = [[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];


console.log(TwoDimensionalArray(array))

console.log({array_length: array.length, ticks})

//node 11-2d-array.js