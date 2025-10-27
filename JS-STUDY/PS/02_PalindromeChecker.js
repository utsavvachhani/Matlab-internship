let str = "A man a plan a canal Panama";

// Using built-in functions
str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let reversed = str.split("").reverse().join("");
console.log(str === reversed);

// console.log(str.replace(/[^a-zA-Z0-9]/g, ""));

// Logically
console.log(isPalindrome(str)); 
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}