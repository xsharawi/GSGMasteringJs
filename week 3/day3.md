# tracking for week 3 day 3!!

# lessons summary

# [deep javascript foundations][js3]

## Scope & Function Expressions
- lecturer doesn't like arrow/unnamed functions (i will still use them as much as i can)

## Advanced Scope
- lecturer doesn't likes the use of var more than let even tho he can still use let as var for most of the cases he showed (i'll still use let more than var)

---

# Coding examples


---

# Coding Exercises

## Scope & Function Expressions:
## QUESTION #1
### Create a function called arrowHOF that takes an arrow function as input and returns a new arrow function that enhances the behavior of the input function.

### The enhanced function should accept additional arguments and execute the input function multiple times based on these arguments.

## my solution

```js

const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
}

const exampleNormalFunc2 = (x, y) => {
  return x * y;
}

const exampleNormalFunc3 = (string) => {
  return string + " " + string + " " + string + "!";
}


const arrowHOF = (normalFunc) => {
  return (...args) => {
    let ans = normalFunc(...args)
    return(x)=>{
      if(!x) return ans
      let answer = ''
      for( let i = 0; i < x; i++ ){
        answer += ans.toString() + '\n'
      }
      return answer
    }
  }
}

const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

// this doesn't log 60 it logs 27 it'll log 60 if the function was a * b * c 
console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc2(20, 35)(4)); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once

```

## QUESTION #2
### Build a function called preserveThis that takes a function as input and returns a new arrow function that behaves the same way as the input function but preserves the original this context when used as a method of an object.

```js
// Example object
const obj = {
  name: 'John',
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

const preserveThis = (func,con) => {
  return (...args)=>{ func.call(con,args)}
}

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet,obj);

// Call the wrapped function as a method of the object
preservedGreet('Hello'); // Output: "Hello, John!"
```

## QUESTION #3
### Consider the 2 following examples and distinguish the different output in each one with them with a reasoning.

### Example 1:

```js
function outer1() {
  var x = 10;

  var inner1 = function() {
    console.log(x);
  };

  inner1();
}

outer1(); // Output: 10
```
### Reasoning for example 1's output:
### since the var declaration of x is a block scoped one the inner function is able to access it since it's in the same scope as x

### Example 2:

```js
function outer2() {
  var x = 10;

  var inner2 = function() {
    var x = 20;
    console.log(x);
  };

  inner2();
}

outer2(); // Output: 20
```

### Reasoning for example 2's output:
### since var allows redeclarations, inside inner2 x was redeclared with the value of 20 but that's only inside the scope of inner2 because it's a new function scope and after the calling of inner2 if you call x it'll still be 10






---


[js3]: https://frontendmasters.com/courses/deep-javascript-v3/introduction/