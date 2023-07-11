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

---


[js2]: https://frontendmasters.com/courses/javascript-hard-parts-v2/
