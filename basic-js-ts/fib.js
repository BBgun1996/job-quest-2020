function fib(number) {
    if (number < 1) {
        return 0
    } else if (number < 3) {
        return 1
    } else {
        return fib(number - 1) + fib(number - 2)
    }
}

console.log(fib(1))
console.log(fib(3))
console.log(fib(12))
