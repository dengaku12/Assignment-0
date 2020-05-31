function frequencyCounter(word) {
  let obj = new Object();
  for(let i =0; i< word.length; i++)
  {
    letter = word.charAt(i);
    if(obj[letter])
    {
      obj[letter]++;
    }
    else
    {
      obj[letter] = 1;
    }
  }
  return obj;
}
console.log(frequencyCounter("appppppppple"));
// Do not edit this line;
module.exports = frequencyCounter;