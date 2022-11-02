/*
write a function that to set a number:
- if the number is divisible by 3, return "fizz"
- if the number is divisible by 5, return "buzz"
- if the number is divisible by 3 and 5, return "fizzbuzz"
- otherwise, return the number
*/

export const fizzbuzz = (num) => {
  if (typeof num !== 'number') {
    throw new Error('parameter is not a number')
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  }
  if (num % 3 === 0) {
    return 'Fizz'
  }
  if (num % 5 === 0) {
    return 'Buzz'
  }
  return num
}
