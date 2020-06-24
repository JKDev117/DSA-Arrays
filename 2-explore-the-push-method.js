const Array = require('./Array.js')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr);
}

main()

//node 2-explore-the-push-method


/*
Q. What is the length, capacity and memory address of your array?

My Answer: 1, 3, 0


Q. Add the following in the main function and then print the array:
    ...
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

My Answer: 6, 12, 3

length 6 because there are 6 elements in the array

capacity 12 because at length 3 you change capacity to 12 (length * 3)

address 3 because ...

*/