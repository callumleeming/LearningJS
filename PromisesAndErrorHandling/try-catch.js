//================================================================================
// Handling Errors in our Code.
//================================================================================

try {
    throw new Error("errorrrrrrrrr");
} catch (error) {
    console.log(error); //Output: [Error: errorrrrrrrrr]  
}

console.log("Hello World!"); //Output: Hello World!

//The catch block will eat up any errors and then continue running the code. 