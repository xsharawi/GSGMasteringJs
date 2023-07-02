# tracking for day 1!!!


# lessons summary

### [JavaScript: From First Steps to Professional][js1]

### introduction:
- what is js? it's the programming language of the web to modify and interact with html(and css)
- where to write js? browser console, local files, online runners, node

### DOM: 

- document object model

- javascript created entity that reprsents the html document to interact with it 

- we can find elements by using getElementById or querySelector or getElementsByTagName... etc

- you can use .length to get the length of the array that's returned by getElementsByTagName!!! or use .textContent to get the inner text inside of an element

- [MDN][mdn] one of the best references for js (also html and css too) and learning more about functions in it and browser compatibility for them and other guides
  
- can use .textContent to modify the inner text of an element and use .append to add to it

- each time the browser loads a page it makes a new document object

### Values & Data types: 
- types of types: 
1. primitive types 
2. objects


---

# coding examples

### javascript first steps>> :

### finding elements exercise:

1. all the p elements
2. the text "X"
3. the number of squares in the board
4. the text "A game you know"

```js
    1:
    document.getElementsByTagName("p");
```
```js
    2:
    document.getElementById('p1-symbol').textContent
```
```js
   3:
    document.getElementsByClassName('square').length
```

```js
    4:
    console.log(document.getElementsByTagName('h2')[0].textContent)
```

### Changing a Web Page exercise:

1. change the player name to you & neighbor
2. swap the the player symbols
3. change subtitle to "a game you know and love"

```js
document.getElementById('p1-name').textContent = 'xsharawi'
document.getElementById('p2-name').textContent = 'giraffe'
```

```js
document.getElementById('p1-symbol').textContent = 'O';
document.getElementById('p2-symbol').textContent = 'X';
```

```js
document.getElementsByTagName('h2')[0].append(' and love' )
```
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
---
[Concatenating Strings with the Plus Equals Operator][ex2]
### my solution:
```js
    let myStr = 'This is the first sentence.';
    myStr += ' This is the second sentence.';
```
---
[Use Bracket Notation to Find the Nth-to-Last Character in a String][ex3]
### my solution:
```js
    // Setup
    const lastName = "Lovelace";

    // Only change code below this line
    const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
```
---
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
---
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
---
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
---


[ex1]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication

[ex2]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator

[ex3]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string

[ex4]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

[ex5]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice

[ex6]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator

[js1]: https://frontendmasters.com/courses/javascript-first-steps/

[mdn]: https://developer.mozilla.org/en-US/