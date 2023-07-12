# tracking for week 2 day 2!!

# lessons summary

# [javascript hard parts v2][js2]

## Asyncronous Javascript
- code execution goes like: callstack then microtask queue then callback queue
- a promises are a way to store some code automatically to run later when a condition is met(waiting for a reply from an api) whether it's fulfilled or returned an error in a non blocking way
  


---

# Coding examples

```js
// order of execution "Me first!" -> 'hi' -> "Hello"
function display(data){console.log(data) /* assuming data is 'hi'*/}
function printHello(){console.log("Hello");}
function blockFor300ms(){/* blocks js thread for 300ms */}
setTimeout(printHello, 0);
const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display)
blockFor300ms()
console.log("Me first!");
```

---

# Coding Exercises
---


[js2]: https://frontendmasters.com/courses/javascript-hard-parts-v2/
[gsg]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md
[gsg1]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md#question-1
[gsg2]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md#question-2
[gsg3]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md#question-3