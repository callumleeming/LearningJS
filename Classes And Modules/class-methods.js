class Writer {
    constructor(message) {
        this.message = message;
    }

    print() {
        return `Your message is: ${this.message}.`;
    }

    printType() {
        return `Your message is a type of: ${typeof(this.message)}.`;
    }
}

let writer = new Writer("I am using a classes constructor"); 

console.log(writer.print()); //Your message is: I am using a classes constructor. 
console.log(writer.printType()); //Your message is a type of: string. 
