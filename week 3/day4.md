# tracking for week 3 day 4!!

# lessons summary

# [deep javascript foundations][js3]

## Advanced Scope
- "hosting" is fake it's just another way of looking at lexical scoping
- the difference between let and var in "hoisting" that var allocates memory for it and initialize it with "undefined" but let makes it as "uninitialize" meaning you can't touch it yet
- the reason TDZ exists is to protect "const" from having two values at two different times being "undefined" at the top of the block scope when it's not used yet in the actual running of the code and added it to let

## closure
- didn't remember to add anything

---

# Coding examples

---

# Coding Exercises

## ADVANCED SCOPE:
## QUESTION #1
### Given the following code snippet and explain what's happening.

```js
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
```
### The current output is: "value of [i] is: 5" five times.

### The output should be:

### "value of [i] is: ", 0 "value of [i] is: ", 1 "value of [i] is: ", 2 "value of [i] is: ", 3 "value of [i] is: ", 4

### Without changing anything in the for loop's code itself, provide a solution to fix it.
## my solution
- the reason it happens is because when the setTimeout function runs the i at that point references a single i that's been changed to 5 
- we can do a few things, first of all we can change the var to let
- we can make the setTimeout take in the i so it's created for it everytime
- we can change the call of setTimeout and make it inside iife

## QUESTION #2
### Given the following code snippet and explain what's happening.

```js
for (let i = 0; i < 5; i++) {
   let array = [];
   array.push(i);
   console.log("Current array is: ", array)
}
```

### The current output is:

### "Current array is: [ 0 ]" "Current array is: [ 1 ]" "Current array is: [ 2 ]" "Current array is: [ 3 ]" "Current array is: [ 4 ]".

### The output should be: "Current array is: [0, 1, 2, 3, 4]".

### Provide a solution to fix it.

## my solution:
- we can just change the code to the following
```js
let array = [];
for (let i = 0; i < 5; i++) {
   array.push(i);
}
console.log("Current array is: ", array)
```
- in the previous state of the code, it had the array redeclared with every iteration of the loop



## QUESTION #3
### Given the following code snippet and explain what's happening.

```js
let functions = [];

for (var i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());
```
### The current output is:

### "Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5"

### The output should be:

### "Current value of i is: 0" "Current value of i is: 1" "Current value of i is: 2" "Current value of i is: 3" "Current value of i is: 4"

### Provide a solution to fix it.
## my solution
- just like before we can just change the `var` to `let` and that changes the output to the correct one



## CLOSURE:
## QUESTION #1
### Create a function called privateCounter() that behaves like a private counter. The function should not have any public variables, and the count should only be accessible through a closure. It should have two methods: increment() and getCount(). The increment() method should increment the count, and getCount() should return the current count.

```js

let privateCounter = () => {
    let counter = 0;
    let publicMethods = {increment,getCount}
    return publicMethods;
    function increment(){
        counter++;
    }
    function getCount(){
        return counter;
    }
};

```
## QUESTION #2
### Write a JavaScript function called generateFibonacci(count) that returns a closure. The closure should generate the next number in the Fibonacci sequence each time it is called. The generateFibonacci function should take a parameter count that determines how many times the closure will generate the next number, and it should use recursion for this purpose.

```js
let generateFibonacci = (count) => {
    let seq = [0,1,1];
    let generate = function myGen(cur = count)  {
        if( seq[cur] === undefined ){
            return seq[cur] = myGen(cur-1) + myGen(cur - 2)
        }
        return seq[cur]
    }
    let getSeq = () => {
        return seq;
    }
    return {getSeq, generate};
}
```

---


[js3]: https://frontendmasters.com/courses/deep-javascript-v3/introduction/