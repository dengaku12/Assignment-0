function countOfAllIndexMatchingNumbers(nums) {
  let count =0;
  for(let i=0; i<nums.length; i++)
  {
    if(nums[i] == i)
    {
      count++;
    }
  }
  return count;
}
let myNums = [14, 1, 40, 3, 18,];
console.log(countOfAllIndexMatchingNumbers(myNums));

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;