function secondMax(array = []) {
    const unique = array.filter((v, i, a) => a.indexOf(v) === i);

    if (unique.length < 1) {
        throw Error("!");
    } else if (unique.length === 1) {
        return unique[0];
    } else {
        return unique.sort((a, b) => b - a)[1];
    }
}

console.log(secondMax([2, 3, 4, 5]))
console.log(secondMax([9, 2, 21, 21]))
console.log(secondMax([4, 4, 4, 4]))
console.log(secondMax([4123]))
console.log(secondMax([]))
