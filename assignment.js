/* Question 1. 
Implement an Array class from scratch ----------------------------------------------------------------------------------------------------------- //

    Task: Walk through each step of implementing an array. Don't rush through this by copying and pasting the code samples. 
    After you've walked through it and you understand the code of the Array class, hide the sample code and try writing 
    the Array class from scratch using the memory module here (https://gist.github.com/tparveen/c78e560c996a745dae41c1f8f2650491) for allocating memory.

    Be sure to export the memory module and then import it using require.

--------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* Question 2. 
Explore the push() method ------------------------------------------------------------------------------------------------------------------------- //

    Task: Using the Array class you just created above, add an item to the array. Use the following function:

    function main(){

        Array.SIZE_RATIO = 3;

        // Create an instance of the Array class
        let arr = new Array();

        // Add an item to the array
        arr.push(3);

        console.log(arr);
    }

    Q) What is the length, capacity and memory address of your array?

        My Answer: 1, 3, 0

    Task: Add the following in the main function and then print the array:
        ...
        arr.push(5);
        arr.push(15);
        arr.push(19);
        arr.push(45);
        arr.push(10);

    Q) What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

        My Answer: 6, 12, 3

            length 6 because there are 6 elements in the array

            capacity 12 because at length 3 you change capacity to 12 (length * 3)

            address 3 because ...
--------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* Question 3. 
Exploring the pop() method ------------------------------------------------------------------------------------------------------------------------- //
    Task: Add the following in the main function and then print the array:
        ...
        arr.pop();
        arr.pop();
        arr.pop();

    Q) What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

        My Answer: Array { length: 3, _capacity: 12, ptr: 3 }

            length 3 because you removed 3 elements from 6

            capacity 12 because length is 3

            address 3 because ...

--------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* Question 4. 
Understanding more about how arrays work ----------------------------------------------------------------------------------------------------------- //

    Task: Print the 1st item in the array arr. 

    Task: Empty the array and add just 1 item: arr.push("tauhida");

    Task: Print this 1 item that you just added. 
        Q) What is the result? Can you explain your result?
            My Answer: NaN

    Q) What is the purpose of the _resize() function in your Array class?
        My Answer:
--------------------------------------------------------------------------------------------------------------------------------------------------------- */