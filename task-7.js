function longestName(strings) {
    let longestString = ' ';
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longestString.length) {
            longestString = strings[i];
        }
    }
    return longestString;
}


let a = longestName(['Macedonia', 'England', 'Italy']);
console.log(a);


let b = longestName(['Greece', 'Sweeden', 'Spain']);
console.log(b);