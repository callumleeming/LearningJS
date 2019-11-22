//Controlling Loops

//(1) 
let i = 0;

for(; i < 20; i++) {
    if(i === 10) {
        break; //stop the loop from continuing
    }
}

console.log(i); //i = 10

//(2)

for(let i = 0; i < 4; i++) {
    if(i === 2) {
        continue;
    }

    console.log(i); //0, 1, (continue will skip an iteration), 3
}