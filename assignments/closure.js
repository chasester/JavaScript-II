// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
(function Kingdom()
{
  (() =>
  {
    console.log("Im in the city");
  })();
})();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

var x = 0;
// ==== Challenge 2: Create a counter function ====

// Example usage: const newCounter = counter();
var increment = (function(n) {  // completes llFE requirement
  return function() {
    n += 1;
    return n;
  }
}(0));
increment();//1
increment();//2
console.log(increment());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

var counter = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let decrement = () => counter--;
  let increment = () => counter++;
  let obj = { increment, decrement }
  return obj;
}


let foo = counterFactory();

console.log(foo.increment());
console.log(foo.decrement());
