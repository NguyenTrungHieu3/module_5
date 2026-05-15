// const numbers = [1, 2, 3, 4];

// const total = numbers.reduce((sum, num) => {
//     return sum + num;
// }, 0)

// console.log(total);

const cart = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 }
];

const totalPrice = cart.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(totalPrice);