// palindrome Number

const isPalindrome = function(x){
    return x<0 ?false : x=== +x.toString().split("").reverse().join("")
};

const result = isPalindrome(121);
console.log(result);

