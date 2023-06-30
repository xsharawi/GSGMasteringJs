# tracking for day 1!!!

# concepts learned

---

# lessons summary

---

# coding examples

---

## Coding Exercises
[Compound Assignment With Augmented Multiplication][ex1]
### my solution:
```js
    let a = 5;
    let b = 12;
    let c = 4.6;

    // Only change code below this line
    a *= 5;
    b *= 3;
    c *= 10;
```
[Concatenating Strings with the Plus Equals Operator][ex2]
### my solution:
```js
    let myStr = 'This is the first sentence.';
    myStr += ' This is the second sentence.';
```
[Use Bracket Notation to Find the Nth-to-Last Character in a String][ex3]
### my solution:
```js
    // Setup
    const lastName = "Lovelace";

    // Only change code below this line
    const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
```
[Profile Lookup][ex4]
### my solution:
```js
    // deleted the setup for this one because it was super long
    function lookUpProfile(name, prop) {
    // Only change code below this line
    let nameExist = false;
    let objPlaceHolder = {};
    contacts.forEach((e)=>{
            if( e.firstName == name ){
            objPlaceHolder = e;
            nameExist = true;
            }
    })

    if( !nameExist ){
        return 'No such contact';
    }
    if(!objPlaceHolder.hasOwnProperty(prop)){
        return 'No such property';
    }
    return objPlaceHolder[prop];

    // Only change code above this line
    }

    lookUpProfile("Akira", "likes");
```
[Copy Array Items Using slice()][ex5]
### my solution:
```js
    function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2,4);
    return arr;
    }

    // Only change code above this line
    console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
[Combine Arrays with the Spread Operator][ex6]
### my solution:
```js
    function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
    }

    console.log(spreadOut());
```


[ex1]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication

[ex2]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator

[ex3]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string

[ex4]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

[ex5]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice

[ex6]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator