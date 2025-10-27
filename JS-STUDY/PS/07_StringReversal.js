
function StringReverse(str) {
    return str.split('').reverse().join('');
}

function StringReverseLogic(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr; 
}

console.log(StringReverse("Hello, World!"));
console.log(StringReverseLogic("Hello, World! Logic")); 