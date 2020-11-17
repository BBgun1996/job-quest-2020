function fizzBuzz(number) {
    return (number % 3 ? "" : "Fizz") + (number % 5 ? "" : "Buzz");
}

console.log(fizzBuzz(21))
console.log(fizzBuzz(25))
console.log(fizzBuzz(45))