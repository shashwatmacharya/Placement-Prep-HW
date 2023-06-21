/*
In JavaScript, a closure is created when an inner function references variables from its outer function, 
even after the outer function has finished executing. 
The inner function maintains access to the outer function's variables and scope chain, 
allowing it to "remember" and use those variables even when it is executed in a different context.
*/
function outerFunction() {
    var outerVariable = 'Hello';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
}
  
var closure = outerFunction();
closure(); // Output: Hello
  