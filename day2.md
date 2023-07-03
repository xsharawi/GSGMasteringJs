# tracking for day 2!!


# lessons summary

# [JavaScript: From First Steps to Professional][js1]

## Strings

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