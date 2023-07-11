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

## [Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem][ex1]

### my solution
```js
const squareList = arr => {
  // Only change code below this line
  arr = arr.filter((e)=>{
    return (e > 0) && (Math.floor(e) === e); 
  }).map((e)=>{
    return e * e;
  })
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

## [Apply Functional Programming to Convert Strings to URL Slugs][ex2]

### my solution

```js
// Only change code below this line
function urlSlug(title) {
  let ans = title.trim().toLowerCase();
  
  ans = ans.split(' ')
  ans = ans.filter(e => {
    if( e !== "" ) {
      return e
    }
  })
  ans = ans.join("-")
  return ans;
  //console.log(ans)
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug("            Winter Is Coming ")
```

# [gsg tasks][gsg]
## [Question 1: Functions and Callbacks][gsg1]
### my solution 
[mapAysnc](https://github.com/xsharawi/GSGMasteringJs/blob/master/week%202/day%201%20tasks/asyncMap.js)

## [Question 2: Call Stack and Recursion][gsg2]
### my solution 
[sumRange](https://github.com/xsharawi/GSGMasteringJs/blob/master/week%202/day%201%20tasks/sumRange.js)

---


[js2]: https://frontendmasters.com/courses/javascript-hard-parts-v2/

[ex1]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
[ex2]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs
[gsg]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md
[gsg1]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md#question-1-functions-and-callbacks
[gsg2]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md#question-2-call-stack-and-recursion