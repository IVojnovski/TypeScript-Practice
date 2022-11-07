"use strict";
function reverseString(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
console.log("input: test");
console.log("output: " + reverseString("test"));
//# sourceMappingURL=string-reverse.js.map