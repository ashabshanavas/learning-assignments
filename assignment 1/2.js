const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Loaded Successfully")
    }, 3000)
});

// using then and catch
promise.then((data => {console.log(data)}))
promise.catch((error => {console.log(error)}))
// promise.finally(() => {console.log("promise fulfilled")})

// using async/await
async function getdata() {
    try {
        const data = await promise;
        console.log(data)
    } catch (error) {
        console.log(error)
    } 
    // finally {
    //     console.log("promise fulfilled")
    // }
}
getdata();