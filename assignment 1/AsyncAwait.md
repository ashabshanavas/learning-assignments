# Definition
async and await are javascript keywords. async is used to declare asynchronous functions. await is used pause execution in javascript runtime.

# Explanation
async function always returns a promise and when await is used in the function, it pauses that function until promise is fulfilled/rejected.

# Syntax
```js
async function getData() {
    const data = await Promise;
    return data
}

getData()
```

# Example
It used to fetch data from API's.
```js
async function getData() {
    const req = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}
const products = await getData();
console.log(products);
```

# Real-world use cases
1. Fetching data from an API
2. Database Queries
3. Calling Multiple APIs

# Disadvantages
1. If you await independent asynchronous tasks one after another, your code may run slower than
2. Every async function always returns a Promise, which may not always be needed

# Advantages
1. Makes asynchronous code easier to read and write.
2. Avoids .then .catch chains
3. Works seamlessly with Promises and modern JavaScript APIs like fetch().
