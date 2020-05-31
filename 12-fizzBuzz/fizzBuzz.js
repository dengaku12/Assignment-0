function fizzBuzz(start, end) {
  let arr = [];
  let inc = start;
  while(inc < end)
  {
    if(inc % 3 == 0 && inc % 5 == 0)
    {
      arr.push("FizzBuzz");
    }
    else if(inc % 3 == 0)
    {
      arr.push("Fizz");
    }
    else if(inc % 5 == 0)
    {
      arr.push("Buzz");
    }
    else
    {
      arr.push(inc);
    }
    inc++;
  }

  if(end % 3 == 0 && end % 5 == 0)
  {
    arr.push("FizzBuzz");
  }
  else if(end % 3 == 0)
  {
    arr.push("Fizz");
  }
  else if(end % 5 == 0)
  {
    arr.push("Buzz");
  }
  else
  {
    arr.push(end);
  }
  return arr;
}
console.log(fizzBuzz(15,30));

// Do not edit this line;
module.exports = fizzBuzz;