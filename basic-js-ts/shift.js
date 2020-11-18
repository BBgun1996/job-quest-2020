function shift(array = [], way = "left", number) {
    if (number === 0 || array.length < 2) {
        return array
    } else if (number < 0) {
        return shift(array, way === "left" ? "right" : "left", -number);
    }

    if (way === "right") {
        return shift(array, "left", array.length - (number % array.length));
    } else {
        array.push(array[0]);
        array.shift();
        return shift(array, way, number - 1);
    }
}

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2))
console.log(shift([1, 2, 3, 4 ,5], 'right', 3))
