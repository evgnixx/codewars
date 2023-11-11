//8 kyu
//Type of sum

//Link:
//https://www.codewars.com/kata/type-of-sum

//Description:
//Return the type of the sum of the two arguments.

//Solution:
function typeOfSum(a, b) {
  const sum = a + b;
  const type = typeof sum;
  return type;
}
