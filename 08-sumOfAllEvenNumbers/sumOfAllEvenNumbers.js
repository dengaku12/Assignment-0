function sumOfAllEvenNumbers(nums) {
  let count = 0;
  for(let i=0; i<nums.length; i++)
  {
    if(nums[i] % 2 ==0)
    {
      count++;
    }
  }
  return count;
}
let myNums = [5, 6, 10, 12, 29, 32];
console.log(sumOfAllEvenNumbers(myNums));
// Do not edit this line;
module.exports = sumOfAllEvenNumbers;