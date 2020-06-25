/* 9. Remove characters

Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'
*/


function removeChars(string, chars){ //O(n)
   let regex = new RegExp(`[${chars}]`, 'g')
   const newString = string.replace(regex, '')
   return newString
}

let string = "Battle of the Vowels: Hawaii vs. Grozny"
console.log(removeChars(string, 'aieou')) //=> Bttl f th Vwls: Hw vs. Grzny

//node 9-remove-characters

