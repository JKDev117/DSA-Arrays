/* 12. String rotation

Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true

*/

let ticks = 0

function rotation(word1, word2){ //O(n)
    ticks++
    if(word1.length == word2.length){
        const arr2 = word2.split('')
        for(let i=0; i<arr2.length; i++){
            ticks++
            arr2.push(arr2.shift())
            let string = arr2.join('')
            if(string == word1){
                return true
            }
        }        
        return false
    }   
    return false    
}



let word1 = "amazon"
let word2 = "azonma"

let word3 = "azonam"

console.log(rotation(word1, word2)) //=> false
//console.log({word1: word1.length, ticks}) //=> { word1: 6, ticks: 7 }

console.log(rotation(word1, word3)) //=> true

//node 12-string-rotation

