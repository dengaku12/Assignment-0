function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  for(let i=0; i<nums.length; i++)
  {
    if(nums[i] < target)
    {
      count++;
    }
  }
  return count;
}
let myNums = [12, 9, 15, 25, 60, 50];
console.log(countOfAllNumbersSmallerThanTarget(myNums, 20));

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;