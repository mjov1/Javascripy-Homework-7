function maxElement(arr) {

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let a = maxElement([2, 5, 8, 11, 14]);
console.log("Max number of this array is " + a);


let b = maxElement([7, 17, 27, 277, 37]);
console.log("Max number of this array is " + b);