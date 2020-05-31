function cutInHalfAndFloor(num) {
  if(num % 2 == 0)
  {
    return num/2;
  }
  else
  {
    return (num/2) - 0.5;
  }
}
console.log(cutInHalfAndFloor(13));
// Do not edit this line;
module.exports = cutInHalfAndFloor;