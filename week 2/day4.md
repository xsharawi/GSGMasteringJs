# tracking for week 2 day 4!!

# lessons summary

# [javascript hard parts v2][js2]

## Classes and prototypes
- object oriented paradigm wants code that achieves:
1. easy to reason
2. easy to add features to
3. efficient and performant
- `__proto__` has a link to `Object`  and `Object.__proto` is set to `null`
- if `this` wasn't implicitly passed through an object to a function it'll refer to the global `Window` object unless the function was an arrow function it'll use the lexical scoping



---

# Coding examples

```js
// makes increment accessable through all the user objects and doesn't store the whole code of increment function code with it
function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function(){this.score++;},
    login: function(){console.log("Logged in");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
// this will go to user1.__proto__ won't find hasOwnProperty there it'll then go look for it in userFunctionStore.__proto__ won't find it there either but will find it in Object properties
user1.hasOwnProperty(score)

```

```js
// another way to write the code above but much simpler and more automatic 

// the __proto__ in user1 and user2 is a reference to the userCreator prototype object
function userCreator (name, score) {
    newUser.name = name;
    newUser.score = score;
};
    userCreator.prototype.increment =  function(){this.score++;}
    userCreator.prototype.login = function(){console.log("Logged in");}
const user1 = new userCreator("Will", 3);
const user2 = new userCreator("Tim", 5);
user1.increment();
user2.increment();
```
```js
// or we can just use a class to make sure it's obvious that we need to use the new keyword
// which combines the prototype and the constructor function

class userCreator  {
    constructor(name, score){
        newUser.name = name;
        newUser.score = score;
    }
    increment(){
        this.score++;
    }
    login(){
        console.log("Logged in");
    }
};
const user1 = new userCreator("Will", 3);
const user2 = new userCreator("Tim", 5);
user1.increment();
user2.increment();
```

---

# Coding Exercises
---


[js2]: https://frontendmasters.com/courses/javascript-hard-parts-v2/