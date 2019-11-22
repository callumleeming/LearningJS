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

//====================================================================================
// You can also extend on the class by adding prototypes
//====================================================================================

class PrototypeWriter {
    constructor(message) {
        this.message = message;
    }
}

PrototypeWriter.prototype.print = function() {
    return `Your message is: ${this.message}.`;
}

PrototypeWriter.prototype.printType = function() {
    return `Your message is a type of: ${typeof(this.message)}.`;
}

let prototypeWriter = new PrototypeWriter("I am using a classes constructor"); 

console.log(prototypeWriter.print()); //Your message is: I am using a classes constructor. 
console.log(prototypeWriter.printType()); //Your message is a type of: string. 
