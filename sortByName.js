const students = [
    { name: "Alex", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Alice", score: 85 }
];

students.sort((a,b) => {
    if (a.score !== b.score) {
        return b.score - a.score;
    }
});
console.log(students);