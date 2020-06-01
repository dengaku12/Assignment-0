function pairSum(nums, target) {
  let sumExists = false;
  for(let i=0; i<nums.length; i++)
  {
    for(let j =i+1; j<nums.length; j++)
    {
      if(nums[i] + nums[j] == target)
      {
        sumExists = true;
      }
    }
  }
  return sumExists;
}
let myNums = [1,2,4,5];
console.log(pairSum(myNums,7));
// Do not edit this line;
module.exports = pairSum;