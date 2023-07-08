# tracking for day 5!!

# lessons summary

# [JavaScript: From First Steps to Professional][js1]


## Data Fetching & Promises:
- nothing really new just some promises syntax

## Destructuring data:
- pulling out information/values from objects/arrays
- can use commas to skip values we dont care about in an array
- the spread `...` operator can be used to put the rest of an array/object in a variable

## Async

## Async functions
- js makes us use async to tell it that the function might have a bit of code that'll take a while to run (awaited code)

## Modules
- can you top level awaits(without a function) in a module

## debugging
- you can use `console` `.log()` or `.warn()` or `.error()` as debugging tools for simple debugging
- you can make your own debugging function 

## browser debugger

- browser own debugger
- you can put the keyword `debugger` to create a breakpoint in the debugger which the debugger pauses on
- it'll show you the scopes with the values 
- you can then run code line by line and check what's happening and jump into functions that are called and you can access anything at a paused point in the console window(as if you were writing code inside of the function if you're paused inside a function)

## try catch error handling
- we use `try catch` to get some errors and handle them on our own and keep moving on in our code

## wrapping up
- now we're the baddest wizards in town of javascript 😎
- the tool box of js is full and yet it can still handle more things


---

# Coding examples

```js
// this only pulls 30 from the array and puts it in thirty
let nums = [10,20,30,40]
let [,,thirty] = nums
```

```js
// an easier way to pull the tile out of the document object
let {title} = document
```

```js
// i just liked this function
// Given a URL such as "https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg"
// return the breed name string as formatted in the breed list, e.g. "standard poodle"
function getBreedFromURL(url) {
    let arr = url.split('/')
    let tempName = arr[4];
    let breedName = tempName.split('-').reverse().join(' ')
    return breedName;
}
```

```js
// awaiting and renaming with destructuring
async function fetchMessage(url) {
    let res = await fetch(url);
    let body = await res.json()
    let {message:msg} = body
    return msg
}
```

---

# Coding Exercises


---


[js1]: https://frontendmasters.com/courses/javascript-first-steps/