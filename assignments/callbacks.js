// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

let b = []
let c = 20;

function getLength(arr, cb= (a) => 0) {
  // getLength passes the length of the array into the callback.
  cb((arr && typeof arr === 'object' && arr.constructor === Array) ? arr.length : 0);
}
getLength(items, console.log);
getLength(b, console.log);
getLength(c, console.log);

function last(arr, cb= (a) => 0) {
  // last passes the last item of the array into the callback.
  cb((arr && typeof arr === 'object' && arr.constructor === Array && arr.length) ? arr[arr.length-1] : "");
}

last(b, console.log); // empty array example
last(c, console.log); //non array example;
last(items, console.log); //proper array

function sumNums(x, y, cb= (a) => 0) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}

sumNums(10,20,console.log);

function multiplyNums(x, y, cb= (a) => 0) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}

multiplyNums(20,10,console.log);

function contains(item, arr, cb= (a) => 0) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb((arr && typeof arr === 'object' && (arr.constructor === Array || arr.constructor === List)) && arr.includes(item) ? true : false);
}

contains("Gum", c, console.log); //non array example
contains("Gum", b, console.log); //empty array example
contains("Hello", items, console.log); //not in array example
contains("Gum", items, console.log); // is in array example
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb([... new Set(array)]);
}
let dup = [2,2,2,2,2,2,23,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,39]
removeDuplicates(dup,console.log);
console.log(dup);
