function titleCaseEdit(title) {
  let titleList = title.split(" ");
  let result = "";
  for(let i=0; i<titleList.length; i++)
  {
    let s = titleList[i].replace(titleList[i].charAt(0),titleList[i].charAt(0).toUpperCase());
    result += s + " ";
  }
  return result;
}
let word = "orange juice is king";

console.log(titleCaseEdit(word));


// Do not edit this line;
module.exports = titleCaseEdit;