# tracking for week 3 day 1!!

# lessons summary

# [deep javascript foundations][js3]

## Types
- JAVASCRIPT IS SO WERID
- Object.is(-0,-0) to make sure if you have a negative zero
- Number.isNaN() to make sure if a value is NaN or not
- NaN === NaN returns false and it's the only value to not be equal to itself


---

# Coding examples

## make your own implementation of Object.is

```js
Object.is = function(a,b){
    let isNegativeZero = (x) => {
        return (x == 0) && ((1/0) == -Infinity)
    }
    let myIsNaN = (x) => {
        return x !== x;
    }
    let ANZ = isNegativeZero(a)
    let BNZ = isNegativeZero(b)
    if( ANZ || BNZ ){
        return ANZ == BNZ;
    }
    else if( myIsNaN(a) && myIsNaN(b) ){
        return true;
    }
    else{
        return ANZ === BNZ
    }
}
```


---

# Coding Exercises


## Question 1:
## my solution:
```js
function convertStringToNumber(input) {
  if( (typeof input) === 'string'){
    let ans = Number(input)
    if(isNaN(ans)){
        return {input, typeof input}
    }
    else{
        return (+input);
    }
  }
  else{
    return {input, typeof input}
  }
}
```

## Question 2:
## my solution:
```js
const checkNaN = (value) => {
  return isNaN(value);
}
```

## Question 3:
## my solution:
```js
function isEmptyValue(value) {
  if( value == undefined || value == null || value == "" ) return true;
  return false;
}
```

## Question 4:
## my solution:
```js
function compareObjects(input1, input2) {
  if(typeof input1 === 'object' && typeof input2 === 'object'  ){
    let keys1 = Object.keys(input1)
    let keys2 = Object.keys(input2)
    let isEqualArray =(a, b) =>{
            return Array.isArray(a) &&
                Array.isArray(b) &&
                a.length === b.length &&
                a.every((val, index) => val === b[index]);
    }
    if(!(isEqualArray(keys1,keys2))){
        return false;
    }
    for( let i = 0; i < keys1.length; i++ ){
        if(input1[keys1[i]] !== input2[keys2[i]]) return false;
    }
    return true;
  }
  else{
    return [input1,input2]
  }

}
```

## Question 5:
## my solution:
```js
const complexCoercion = (input) => {
  let isPri = (x) => {
    let prims = ['string','number','bigint','boolean','undefined','symbol']
    return prims.includes(typeof x)
  }
    if( isPri(input) ){
        if( typeof input === 'number' ) return input.toString()
        if( typeof input === 'string' ) return true
        if(input === null || input === undefined ) return false
    }
  return input;
}
```

---


[js3]: https://frontendmasters.com/courses/deep-javascript-v3/introduction/