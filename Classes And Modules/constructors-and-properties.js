class Writer {
    constructor(message) {
        this.message = message;
    }
}

let writer = new Writer("I am using a classes constructor!"); 

console.log(writer.message); //Output: I am using a classes constructor!
