// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

  // TODO: Create the solution
  //natural number: non-negative & are whole numbers only.
  //this will store the numbers that are multiples of 3 or 5. 
  function solution(number) {
    if (typeof number !== 'number') {
      return -1;
    } else {
      if (number < 0){
        return -1
      }
      if (number <= 3) {
        return 0;
      }
       else {
        if ((number % 3 == 0) || (number  % 5 == 0)) {
          //recursively call the function. 
          return console.log(solution(number - 1) + number - 1);
        }
        else {
          return console.log(solution(number - 1));
        }
      }

    }
  }

module.exports = solution;
