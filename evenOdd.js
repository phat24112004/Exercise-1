const arr = [1, 2, 3, 4, 5];
let even = 0;
let odd = 0;
for (let num of arr) {
    if (num % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
console.log(even);
console.log(odd);