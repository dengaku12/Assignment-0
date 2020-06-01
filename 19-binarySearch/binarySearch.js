class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target, start, end) {
    if(start > end)
    {
      return false;
    }
    let mid = Math.floor((start+end)/2);
    if(nums[mid]==target)
    {
      return true;
    }
    else if(target < nums[mid])
    {
      return this.binarySearch(nums, target,start, mid-1);
    }
    else
    {
      return this.binarySearch(nums, target, mid+1, end);
    }
   
  }
}
let mySol = new MySolution();
let arr = [1,2,3,4,5];
console.log(mySol.binarySearch(arr,4,0,4));
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;