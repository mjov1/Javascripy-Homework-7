function isEven(arr) {

    let even = [];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }
    }
    if (even.length === 0) {
        console.log("None of the numbers are even")
    }
    return even;

}

let a = isEven([1, 2, 3, 4, 5, 6, 7, 9]);
console.log(a);

let b = isEven([33, 13, 34, 8,]);
console.log(b);
