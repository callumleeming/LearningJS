//================================================================================
// Handling Errors in our Code.
//================================================================================

try {
    let example = something
} catch (error) {
    console.log(`Our example error: ${error}`); //Our example error: ReferenceError: something is not defined 
}

console.log("Hello World!"); //Output: Hello World!

//The catch block will eat up any errors and then continue running the code. 