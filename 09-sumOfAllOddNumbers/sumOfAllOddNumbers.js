function sumOfAllOddNumbers(nums) {
  let count =0;
  for(let i=0; i<nums.length; i++)
  {
    if(nums[i] % 2 == 1)
    {
      count++;
    }
  }
  return count;
}
console.log(sumOfAllOddNumbers([12,15,13,18]));

// Do not edit this line;
module.exports = sumOfAllOddNumbers;