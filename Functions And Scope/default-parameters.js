let trackCab = function(cabId, location='Manchester') {
    return `Tracking ${cabId} in ${location}.`;
}

console.log(trackCab(123, 'London')); //Tracking 123 in London.
console.log(trackCab(123)); //Tracking 123 in Manchester.
