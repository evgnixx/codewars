//8 kyu
//Convert a Number to a String!

//Link:
//https://www.codewars.com/kata/convert-a-number-to-a-string

//Description:
//We need a function that can transform a number (integer) into a string.

//Solution:
function numberToString(num) {
  if (typeof num === 'number') {
    return String(num);
  } else if (typeof num === 'string') {
    return num;
  } else {
    return undefined;
  }
}
