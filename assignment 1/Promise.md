# Definition
Promise is an object that tells us the phases of the data being loaded during an asynchronous operation.

# Explanation
A Promise object has three states, 
Pending: It is the initial state, it tells us that the data is being retrieved.
Fulfilled: It tells us the Data has been fulfilled, it is returned via resolve().
Rejected: It tells us the promise has been rejected, leaving us with no data or an error. Returned via reject().

# Syntax
We can create a promise by introducing a new promise object to a variable.
Inside the promise object, there should be an arrow function with two params, resolve and reject.
These params help us know about the phase in which the data is being loaded.
```js
const mypromise = new Promise((resolve, reject) => {
    const result = 5+5;
    if (result >= 10) {
        resolve("Message")
    } else {
        reject("Error")
    };
})
```


# Example

It is used while fetching data from api.
Eg.
```js
const data = fetch('https://fakestoreapi.com/products'); // this returns a promise object
const responsejson = data.then((response) => response.json()).then((finaldata) => {console.log(finaldata)})
data.catch((error) => {console.log(error)})
```

# Real-world use cases
1. Used in fetching data from API.
2. Used in database queries.
3. Used in setting delays for certain functions

# Disadvantages
1. Cant be killed, promise keeps on running until its fulfilled or rejected.

# Advantages
1. It provides error handling with single catch()
2. It executes the code in stages making it structured which is cleaner than nested functions

