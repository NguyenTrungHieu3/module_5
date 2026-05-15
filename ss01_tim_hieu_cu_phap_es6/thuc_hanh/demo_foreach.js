// const numbers = [13, 5, 40];

// numbers.forEach((num) => {
//     console.log(num);
// });

// // forEach() không return ra mảng
// const results = numbers.forEach((num) => {
//     return num * 2;
// })

// console.log(results);

const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit, index) => {
    console.log(`${index + 1} : ${fruit}`);
});