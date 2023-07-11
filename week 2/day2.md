# tracking for week 2 day 2!!

# lessons summary

# [javascript hard parts v2][js2]

## Closures
- when we return a function it takes the memory parts that are related to it and are stored in the previous memory section with a hidden scope property
- P.L.S.R.D persistent lexical scope referenced data (bacpack)(closure)
- javascript has a static (lexical) scoping which means: where i save my function determines what data it has access to when it runs


---

# Coding examples

```js
// a closure funciton that returns a function with a counter increasing by 1 and each time we run outer() we get a new counter start with value 0
function outer(){
    let counter = 0;
    function increament(){
        counter++;
    }
    return increament;
}
```

---

# Coding Exercises

# [gsg tasks][gsg]
## [Question 1:][gsg1]
### my solution 
[create counter](https://github.com/xsharawi/GSGMasteringJs/blob/master/week%202/day%202%20tasks/createCounter.js)

## [Question 2:][gsg1]
### my solution 
[average](https://github.com/xsharawi/GSGMasteringJs/blob/master/week%202/day%202%20tasks/average.js)

## [Question 3:][gsg1]
### my solution 
[powerOf](https://github.com/xsharawi/GSGMasteringJs/blob/master/week%202/day%202%20tasks/power.js)

## [Question 4:][gsg1]
### my solution 
[reverse functions](https://github.com/xsharawi/GSGMasteringJs/blob/master/week%202/day%202%20tasks/combo.js)

---


[js2]: https://frontendmasters.com/courses/javascript-hard-parts-v2/
[gsg]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md
[gsg1]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md#question-1
[gsg2]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md#question-2
[gsg3]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md#question-3
[gsg4]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md#question-4