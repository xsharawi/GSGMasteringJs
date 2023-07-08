# tracking for day 4!!

# lessons summary

# [JavaScript: From First Steps to Professional][js1]


## Events and Handlers
- nothing new to be honest

## map & filter
- nothing new to be honest

## doggos quiz game
- nothing new learned just some event handlers in a simple html page



---

# Coding examples

```js
// adding handlers to all option buttons and disabling every button while telling the user if it's the correct option or not
for( let b of optionButtons ){
    b.addEventListener("click", (event) => {
        explanation.textContent = fact.explanation;
        for( let btn of optionButtons ){
            disable(btn)
        }
        if( isCorrect(b.value) ){
            b.classList.add("correct")
        }else{
            b.classList.add("incorrect")
        }
    })
}
```
---

# Coding Exercises


---


[js1]: https://frontendmasters.com/courses/javascript-first-steps/