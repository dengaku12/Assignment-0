function isPalindrome(word) {
  let reverse = "";
  for(let i = word.length-1; i>=0; i--)
  {
    reverse += word.charAt(i);
  }
  return word == reverse;
}
console.log(isPalindrome("madam"));

// Do not edit this line;
module.exports = isPalindrome;