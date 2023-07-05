# tracking for day 3!!


# lessons summary

# [JavaScript: From First Steps to Professional][js1]


## Arrays
- `push` adds to the same array
- `concat` adds to a new copy of the array
- strings are not mutable
- better to use immutable data if we have a choice to keep code consistent 
- can use string functions on object properties like `obj.name.startsWith("Mas")` 
- can use . to modify the object


---

# Coding examples

```js
// const operands stores a referance to the array but the array itself is mutable so we can change it but can't change the referenced array
const operands = [4,6];
const sum = operands[0] + operands[1];
console.log(sum); //10
operands[0] = 5;
const newSum = operands[0] + operands[1];
console.log(newSum); //11

```

```js
// here js just gives arr2 the same pointer to arr 
let arr = [1,2,3];
let arr2 = arr;
console.log(arr2); // [1,2,3]
arr.push(5)
console.log(arr2); // [1,2,3,5]
```


---

# Coding Exercises

---


[js1]: https://frontendmasters.com/courses/javascript-first-steps/