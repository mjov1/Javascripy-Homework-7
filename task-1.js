function sumOfArray(items) {
    let sum = 0;
    for (const item of items) {
        if (typeof item === 'number') {
            sum += item;
        }
    }
    return sum;
}


const arr1 = sumOfArray([5, 10, 15, 20, 25]);
console.log('Sum of arr1 is ' + arr1);

const arr2 = sumOfArray([1, 2, 3, 4, 5]);
console.log('Sum of arr2 is ' + arr2);
