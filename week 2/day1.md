# tracking for week 2 day 1!!

# lessons summary

# [javascript hard parts v2][js2]

## javascript principles
- the three core components of js: memory, thread of execution, and callstack.
- execution context: run the code of a function with the thread of execution and memory

## functions and callbacks
- why do we use functions? to keep with the principle DRY(don't repeat yourself)


---

# Coding examples

```js
// we can save a lot of time coding extra functions when we can just pass a function as parametars in javascript
function copyArrayAndManipulate( array, instructions ){
    const output = [];
    for( let i = 0; i < array.length; i++ ){
        output.push(instructions(array[i]))
    }
    return output;
}
```

---

# Coding Exercises


---


[js2]: https://frontendmasters.com/courses/javascript-hard-parts-v2/