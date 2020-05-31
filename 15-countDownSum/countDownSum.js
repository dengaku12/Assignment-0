class MySolution {
  countDownSum(num) {
    if(num <= 1)
    {
      return 1;
    }
    else
    {
      return num + this.countDownSum(num-1);
    }
    
  }
}
let sol = new MySolution();
console.log(sol.countDownSum(5));
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;