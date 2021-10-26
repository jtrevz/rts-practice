let testString = "jennytrevizo"
let testInput = 6;

function rotateString (string, input) {
    let sliceString = string.slice(-(input))
    let normString = string.slice(0,((string.length) - input))
    let rotatedString = ''

    for (let i = 0; i < sliceString.length; i++) {
        rotatedString += sliceString[i]
    } 
    
    if (input >= string.length) {
        console.log(rotatedString)
    }
    else{

        console.log(rotatedString + normString);
    }
}

// isolate/slice portion you want to rotate
    //where to start slice
//rotate
//return after adding it to the beginning

rotateString(testString,testInput)


