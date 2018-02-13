'use strict';

function highValues(arr){
    if(!arr) throw new Error('no value entered');
    if(Array.isArray(arr) !== true) throw new Error('not an array');
    arr.forEach(a => {if(typeof(a) !== 'number') throw new Error('not all array values are numbers')});

    let arr2 = arr.filter(a => a !== Math.max.apply(null, arr));

    return {
        highest: Math.max.apply(null, arr),
        secondHighest: Math.max.apply(null, arr2)
    };
}

console.log(highValues([123,23,200,200,123,53,12]));

/* Tests:
-- Should throw an error is nothing entered
-- Should throw an error if entry isn't an array
-- Should throw an error if all parts of array aren't numbers
-- Should fail test if it doesn't properly return highest and second highest number
*/