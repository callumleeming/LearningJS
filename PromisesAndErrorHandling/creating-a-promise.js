var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
    }, 100);
});

promise.then((value, error) => {
    console.log(`completed: ${value}`); //completed: foo
})

//================================================================================
// Reject 
//================================================================================

var myPromise = new Promise(function (resolve, reject) {
    setTimeout(reject, 100, "foo");
});

myPromise.then(error => {
    console.log(`rejected:  ${error}`); //rejected: foo
})