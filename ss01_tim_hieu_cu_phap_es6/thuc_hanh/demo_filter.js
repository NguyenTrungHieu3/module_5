// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(num => {
//     return num % 2 === 0;
// })

// console.log(evenNumbers);

// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Mouse", price: 20 },
//     { name: "Keyboard", price: 50 }
// ];

// const expensiveProducts = products.filter(product => {
//     return product.price > 100;
// })

// console.log(expensiveProducts);

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 }
];

const affordableProducts = products.filter(product => {
    return product.price <= 100;
})

console.log(affordableProducts);