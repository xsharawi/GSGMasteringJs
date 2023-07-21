# tracking for week 3 day 2!!

# lessons summary

# [deep javascript foundations][js3]

## static typing

- lecturer doesn't like typescript/ flow enough because they solve his problems in a way that he doesn't agree with 🤷🏻‍♂️
- pros of typescript/flow: familiarity, being popular, sophisticated and good at what they do
- cons of them: use of "non standard js" syntax, need a compiler, can be intimidating to people without formal types experience and focue on static typing instead of value typing like other language 

## Scope
- js code is parsed/compiled before it's ran
- if we're not using strict mode and we reference a variable that wasn't created it will be created in the global scope
- if we are using strict mode it'll throw a reference error
- most tools like babel use strict mode by default but js doesn't unless it's in es6 mode or in a class
- undefined: variable exists but doesn't have a value at this time, undeclared: never formally declared in any scope we have access to

---

# Coding examples


---

# Coding Exercises

## STATIC TYPING QUESTIONS:
### QUESTION #1
### Given the following promisesArray, convert the array into an object using the convertToObj function.
### You should apply typescript types to every promise, the input of convertToObj, and the output of convertToObj.
### Build interfaces and types as needed.

```js
const sayHelloWorld = new Promise(resolve, reject => {
  resolve("Hello world!");
});

const checkBoolean = (boolean) => new Promise(resolve, reject => {
  if (boolean) {
    resolve(boolean);
  } else {
    reject(`Input is false :(`)
  }
})

const returnObj = new Promise(resolve, reject => {
  resolve({
    x: "meow",
    y: 45,
  })
})

const promisesArray = [sayHeloWorld, checkBoolean, returnObj];

const convertToObj = (array) => {
  //write your code here;
  return obj;
}

```

## SCOPE & HOISTING QUESTIONS:

## QUESTION #1:
### What will be the output of the following code snippet? Pick the right choice then justify your answer with an explanation.

```js
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

testScope1();
```

```
Choices:

A) undefined, undefined, undefined
B) 1, undefined, ReferenceError
C) 1, ReferenceError, ReferenceError
D) 1, ReferenceError

correct answer is D because all variables are declared in the if statement scope however var is function wide scoped so it stays after the end of the if statement but let and const are block scoped and get destroyed after the if statement scope

```



## QUESTION #2:
### What will be the output of the following code snippet? Pick the right choice then justify your answer with an explanation.


```js
function testScope2() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

testScope2();
```

```
Choices:

A) undefined, ReferenceError
B) 1, undefined, ReferenceError
C)undefined, undefined, ReferenceError
D) 1, ReferenceError

correct answer is A because while the var is function scoped it's hoisted and can be seen at the very start of the function but it's not declared YET, however b and c aren't hoisted on a function scope level
```


## QUESTION #3:
### What will be the output of the following code snippet? Pick the right choice then justify your answer with an explanation.


```js
function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;

  console.log([a, b, c]);

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log([a, b, c]);
  }

  console.log([a, b, c]);
}

testScope3();
```

```
choices:

A) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 36, 2, 3 ]
B) [ 36, 100, 45 ] | [1, 2, 3 ] | [ 36, 100, 45 ]
C) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1,100, 45 ]
D) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1, 2, 3 ]

correct answer is C; the first output is very clear they're just declared before it, 
same with the 2nd output,
however with the thrid output; the reference for `var a` changes because var is function wide scoped and it redeclares a again with the value of 1 however b c stay the same as before the functions because while they are redeclared inside of the if statement it doesn't change the original referances 

```




---


[js3]: https://frontendmasters.com/courses/deep-javascript-v3/introduction/