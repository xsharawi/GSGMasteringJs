# tracking for day 2!!


# lessons summary

# [JavaScript: From First Steps to Professional][js1]

## Strings

- `.length` for telling us how long is a string
- strings are 0 indexed arrays
- `.indexOf` can find the first accurance of a character or the starting index if we send a substring or -1 if isn't not there
- `.includes` to find the string has this substring
- `startsWith` to find if a string starts wtih a substring
- `+` to concatenate strings
- `toLowerCase` returns the string as a lower case

## Operators

- `===` checks for values and types

## Expressions

- an expressions resolves to a value
- null vs undefined: null i want it that way, undefined declared but not given value

## Arrays
- `indexOf` works the same way as in strings
- `.includes` works the same way as in strings
- array dont care what types of values are in them and can have multiple types in the same array




---

# Coding examples

---

# Coding Exercises

## Exercise 

### which data type is each of these values?

- false: boolean
- "true": string 
- document.title: string
- "some string".length: number
- null: object
---

## Exercise 

### use our new string superpowers to:
1. add your last name in the player listing
2. retrieve the first "T" in the page title
3. answer whether the page title contains the string "JavaScript"
4. capitalize the heading "Tic Tac Toe"

```js
1.
  document.getElementById("p1-name").innerHTML =document.getElementById("p1-name").innerHTML  + " sharawi" 

```

```js
2.
  document.title[document.title.indexOf("T")]
```

```js
3.
  if( document.title.includes("JavaScript") ){
      console.log("yes it does include JavaScript")
  }else{
      console.log("no it doesn't")
  }
```

```js
4.
  document.getElementsByTagName('h1')[0].innerHTML =  document.getElementsByTagName('h1')[0].innerHTML.toUpperCase()

```
---

## Exercise 

### Declare & assign variables to remember:
- Your name `let name = "sharawi";`
- The combined age of your parents `let age = 30 + 30;`
- The #board element on the page `let board = document.getElementById('board');`

---

## [Return a Value from a Function with Return][ex1]

### my solution

```js
function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);

```

---

## [Global Scope and Functions][ex2]

### my solution

```js
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
      oopsGlobal = 5  
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

```

---


## [Local Scope and Functions][ex3]

### my solution

```js
function myLocalScope() {
  // Only change code below this line
  let myVar = 'hi';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

```

---

## [Global vs. Local Scope in Functions][ex4]

### my solution

```js
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

```

---


## [Use Multiple Conditional (Ternary) Operators][ex5]

### my solution

```js
function checkSign(num) {
        return (num === 0) ? "zero" : (num > 0) ?  'positive' : 'negative'
}

checkSign(10);

```

---

## [Golf Code][ex6]

### my solution

```js
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if( strokes == 1 ) return names[0];
  if( strokes <= par - 2) return names[1];
  if( strokes == par - 1) return names[2];
  if( strokes == par ) return names[3];
  if( strokes == par + 1) return names[4];
  if( strokes == par + 2) return names[5];
  if( strokes >= par + 3) return names[6];
  // Only change code above this line
}

```

---

## [Use the map Method to Extract Data from an Array ][ex7]

### my solution

```js
// The global variable
const watchList = [/* massive amount of data */];
// Only change code below this line

let ratings = [];
  ratings= watchList.map((e)=>{
    return {title: e.Title, rating: e.imdbRating}
  }
  )
 

// Only change code above this line

console.log(JSON.stringify(ratings));

```

---

## [Use the filter Method to Extract Data from an Array ][ex8]

### my solution

```js
// The global variable
const watchList = [/* massive amount of data */];

// Only change code below this line

const filteredList = 
watchList.map((e)=>{
    return {title: e.Title, rating: e.imdbRating}
}).filter((e)=>{
  return e.rating >= 8;
})
  

// Only change code above this line

console.log(filteredList);

```

---




[js1]: https://frontendmasters.com/courses/javascript-first-steps/

[ex1]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return

[ex2]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions

[ex3]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions

[ex4]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions

[ex5]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators

[ex6]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code

[ex7]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array

[ex8]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array