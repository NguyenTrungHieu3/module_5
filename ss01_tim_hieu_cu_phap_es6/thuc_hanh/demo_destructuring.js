const numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);

// Bỏ qua phần tử
const [d, , e] = numbers;
console.log(d);
console.log(e);

// Giá trị mặc định
const [f = 100, g = 100] = [1, 111];
console.log(f);
console.log(g);

// Destructuring Object
const user = {
    name: "An",
    age: 20
};
// const {
//     name,
//     age
// } = user;
// console.log(name);
// console.log(age);

// Đổi tên biến
// const {
//     name : userName
// } = user;
// console.log(userName);

// Giá trị mặc định
const {
    name : userName,
    age = 18,
    city = "Đà Nẵng"
} = user;
console.log(userName);
console.log(age);
console.log(city);