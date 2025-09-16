const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'}
];
const result = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});
console.log(result);