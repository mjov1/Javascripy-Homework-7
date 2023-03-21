function findLongestWord(string) {
    let stringSplit = string.split(' ');
    let longestWord = 0;
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].length > longestWord) {
            longestWord = stringSplit[i].length;
        }
    }
    return longestWord;
}

let a = findLongestWord('The quick brown fox jumped over the lazy dog');
console.log(a);