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
	} else if (num % 3 === 0) {
		return 'Fizz'
	} else if (num % 5 === 0) {
		return 'Buzz'
	} else {
		return num
	}
}
