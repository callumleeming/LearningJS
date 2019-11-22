//================================================================================
// Handling Errors in our Code. Part II.
//================================================================================

try {
    throw new Error("Oh no, not another error!");
} catch (error) {
    console.log(error); //Output: [Error: Oh no, not another error!] 
} finally {
    console.log("I always run because I'm a finally block!");
}

//The finally block will run no matter what. This can be useful when dealing with http calls.  