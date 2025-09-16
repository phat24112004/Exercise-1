const arr = ["a", "b", "a", "c", "b", "a"];
const count = {};
for (let items of arr) {
    if (count[items]) {
        count[items]++;
    } else {
        count[items] = 1;
    }
}
console.log(count);
