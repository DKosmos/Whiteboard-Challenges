'use strict';

let engine = {
    value: 2,
    next: {
        value: 10,
        next: {
            value: 20,
            next: {
                value: 10,
                next: {
                    value: null
                }
            }
        }
    }
}


const traverse = function(engine){
    let passengers = [engine.value];
    let currentLocation = 'engine.next';
    while(eval(currentLocation).value){
        passengers.push(+eval(currentLocation).value);
        currentLocation += '.next';
    }
    return passengers.reduce((a,b) => a + b);
}

console.log(traverse(engine));