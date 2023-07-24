# tracking for week 2 day 3!!

# lessons summary

# [javascript hard parts v2][js2]

## Asyncronous Javascript
- code execution goes like: callstack then microtask queue then callback queue
- a promises are a way to store some code automatically to run later when a condition is met(waiting for a reply from an api) whether it's fulfilled or returned an error in a non blocking way
  


---

# Coding examples

```js
// order of execution "Me first!" -> 'hi' -> "Hello"
function display(data){console.log(data) /* assuming data is 'hi'*/}
function printHello(){console.log("Hello");}
function blockFor300ms(){/* blocks js thread for 300ms */}
setTimeout(printHello, 0);
const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display)
blockFor300ms()
console.log("Me first!");
```

---

# Coding Exercises

## Question 1:
### You are given a function executeInSequenceWithCBs and some code. The task is to modify the executeInSequenceWithCBs function so that it runs and executes all the tasks inside the asyncTasks array.

### The function should return an array of messages obtained from each task's execution.

### You are only allowed to change the executeInSequenceWithCBs function or add new functions/code. You cannot modify the tasks' functions.

```js
const task1 = (cb) => setTimeout(() => {
  const message = "Task 1 has executed successfully!";
  cb(message);
}, 3000)

const task2 = (cb) => setTimeout(() => {
  const message = "Task 2 has executed successfully!";
  cb(message);
}, 0)

const task3 = (cb) => setTimeout(() => {
  const message = "Task 3 has executed successfully!";
  cb(message);
}, 1000)

const task4 = (cb) => setTimeout(() => {
  const message = "Task 4 has executed successfully!";
  cb(message);
}, 2000)

const task5 = (cb) => setTimeout(() => {
  const message = "Task 5 has executed successfully!";
  cb(message);
}, 4000)

const asyncTasks = [task1, task2, task3, task4, task5];

const executeInSequenceWithCBs =async (tasks, callback) => {
    let proms = tasks.map(task=>{
        return new Promise(resolve=>{
             task((msg)=>resolve(msg))
        })
            
    })
    let res = await Promise.all(proms)
    let result =  res;

return result;
    
}
let ans = await executeInSequenceWithCBs(asyncTasks,(msg)=>{return msg})
console.log(ans)
```



## Question 2:
### You are given a function called executeInParallelWithPromises, which takes an array of APIs (represented by objects).

### Your task is to write code that fetches the data of each API in parallel using promises. In Parallel means that the api which resolves first, returns its value first, regardless of the execution order.

### The output of the executeInParallelWithPromises function should be an array containing the results of each API's execution.

### Each result should be an object with three keys: apiName, apiUrl, and apiData..
```js
const apis = [
  {
    apiName: "products", 
    apiUrl: "https://dummyjson.com/products",
  }, 
  {
    apiName: "users", 
    apiUrl: "https://dummyjson.com/users",
  }, 
  {
    apiName: "posts", 
    apiUrl: "https://dummyjson.com/posts",
  }, 
  {
    apiName: "comments", 
    apiUrl: "https://dummyjson.com/comments",
  }
]

const executeInParallelWithPromises = async (apis) => {
  for( let api of apis ){
    api.apiData = (await (await fetch(api.apiUrl)).json())[api.apiName]
  }
  return apis;
}

let answers = await executeInParallelWithPromises(apis)
console.log(JSON.stringify(answers))
```




## Question 3:
### You are given a function called executeInSequenceWithPromises, which takes an array of APIs (represented by objects).

### Your task is to write code that fetches the data of each API sequentially (one after the other) using promises.

### In Sequence means that the api which executes first, returns its value first.

### The output of the executeInSequenceWithPromises function should be an array containing the results of each API's execution.

### Each result should be an object with three keys: apiName, apiUrl, and apiData.

```js

const apis = [
  {
    apiName: "products", 
    apiUrl: "https://dummyjson.com/products",
  }, 
  {
    apiName: "users", 
    apiUrl: "https://dummyjson.com/users",
  }, 
  {
    apiName: "posts", 
    apiUrl: "https://dummyjson.com/posts",
  }, 
  {
    apiName: "comments", 
    apiUrl: "https://dummyjson.com/comments",
  }
]

//modify and write your code here
const executeInSequenceWithPromises = async (apis) => {

  async function fun(url){
      let prom = new Promise( async (resolve,reject)=>{
          try{
              let fet = await fetch(url)
              let res = await fet.json();
              resolve(res)
          }catch(err){
              reject(err)
          }

      })

      let ans = await prom;
      return ans;
  }


  let promises = apis.map(async (api)=>{
    return api.apiData =(await fun(api.apiUrl))
  })
  let ans = await Promise.all(promises)
  apis.map(api=>{
    ans.forEach(prm=>{
      if( api.apiName === prm[api.apiName] ){
        api.apiData = prm[api.apiName]
      }
    })
  })
  return apis;
}


let answers =await executeInSequenceWithPromises(apis);
console.log(JSON.stringify(answers))
```

---


[js2]: https://frontendmasters.com/courses/javascript-hard-parts-v2/
[gsg]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md
[gsg1]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md#question-1
[gsg2]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md#question-2
[gsg3]: https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md#question-3