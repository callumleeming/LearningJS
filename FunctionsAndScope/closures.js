//Closures

let app = (function(){
    let id = 5678;
    let getId = function() {
        //reaches to parent function to look for id
        return id
    };
    //closure created here 
    //always return reference to the function
    return {
        getId: getId
    };
})();

console.log(app.getId());
