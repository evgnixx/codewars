//8 kyu
//Convert a String to a Number!

//Link:
//https://www.codewars.com/kata/convert-a-string-to-a-number

//Description:
//We need a function that can transform a string into a number.

//Solution:
function stringToNumber(str) {
  if (typeof str !== 'number') {
    return Number(str);
  } else if (typeof str === 'number') {
    return str;
  } else {
    return undefined;
  }
}
