// const numbers = [5, 10, 15, 20];

// const result = numbers.find(num => num > 10);

// console.log(result);

// const users = [
//     { id: 1, name: "An" },
//     { id: 2, name: "Bình" }
// ];

// const user = users.find(user => {
//     return user.id === 2;
// })

// console.log(user);

const users = [
    { id: 1, name: "An" },
    { id: 2, name: "Bình" },
    { id: 3, name: "Cường" }
];

const user = users.find(user => {
    return user.id === 2;
})

console.log(user);
