function average(items) {
    let sum = 0;
    let counter = 0;
    for (const item of items) {
        if (typeof item === 'number') {
            sum += item;
        } else {
            counter++;
        }
    }
    return sum / (items.length - counter);
}

let a = average([1, 2, 3, 4, 5,]);
console.log(a);

let b = average([50, 10, 30, 20]);
console.log(b);