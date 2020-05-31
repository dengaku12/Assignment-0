function setUnionOfAnyAmountOfSets(...args) {
  let mySet = new Set();
  for(let i = 0; i<args.length; i++)
  {
    for(const elem of args[i])
    {
      mySet.add(elem);
    }
  }
  return mySet;
}
let set1 = new Set([1,3,4,2]);
let set2 = new Set([10,19,7]);
let set3 = new Set([24, 30, 8,42]);
console.log(setUnionOfAnyAmountOfSets(set1,set2,set3));
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;