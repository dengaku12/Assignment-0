function countOfAllBooleans(arr) {
  let count =0;
  for(let i=0; i<arr.length; i++)
  {
    if(arr[i]==true || arr[i]==false)
    {
      count++;
    }
  }
  return count;
}
let myarr = ["Apples", "Corn", true, "crayon",false];
console.log(countOfAllBooleans(myarr));

// Do not edit this line;
module.exports = countOfAllBooleans;