function sumOfMinimumAndMaximum(nums) {
  let min = nums[0];
  let max = nums[0];
  for(let i =1; i<nums.length; i++)
  {
    if(nums[i] < min)
    {
      min = nums[i];
    }
    if(nums[i] > max)
    {
      max = nums[i];
    }
  }
  return max + min;
}
console.log(sumOfMinimumAndMaximum([13,14,10,8,5]));
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;