function countOfAllBooleansAndStrings(arr) {
  let count =0;
  for(let i=0; i<arr.length; i++)
  {
    if(typeof arr[i] == "string" || typeof arr[i] == "boolean")
    {
      count ++;
    }
  }
  return count;
}
let myarr = ["Orange", "Apple", 15, false, 19, 12, true];
console.log(countOfAllBooleansAndStrings(myarr));

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;