const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'}
];
const result = users.reduce((value, index) => {
    value[index.id] = index.name;
    return value;
}, {});
console.log(result);
