let testInput = 6;
let testArray = [1, 5, 2, 1, 10];
let testArray2 = [1, 5, 2, 1, 10, 6]


function integerCount  (input, array) {
    let above = 0;
    let below = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] < input) {
            below++;
        }
        else if (array[i]> input) {
            above++;
        }
    }
    return console.log(`Input: ${input}, Above: ${above}, Below: ${below}`);
}

integerCount(testInput, testArray2) 
//go through each integer in loop/

//is it above/below?

//add to above/below counters

//console.log response