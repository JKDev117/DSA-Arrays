const Array = require('./Array.js')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    console.log(arr); //=> Array { length: 1, _capacity: 3, ptr: 0 }

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr); //=> Array { length: 6, _capacity: 12, ptr: 3 }

    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr); //=> Array { length: 3, _capacity: 12, ptr: 3 }

    console.log(arr.get(0)); //=> 3

    arr.pop()
    arr.pop()
    arr.pop()
    console.log(arr); //=> Array { length: 0, _capacity: 12, ptr: 3 }

    arr.push('tauhida')
    console.log(arr.get(0)) //=> NaN 
}

main()

//node main.js

