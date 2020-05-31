function productOfAnyAmountOfNumbers(...args) {
  let prod = 1;
  for(let i=0; i<args.length; i++)
  {
    prod *= args[i];
  }
  return prod;
}
console.log(productOfAnyAmountOfNumbers(1,2,3,4,5));
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;