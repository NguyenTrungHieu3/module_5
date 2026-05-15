// Array
const numbers = [1, 2, 3];

console.log("numbers: ", ...numbers);

// Copy Array
const arr1 = [...numbers];
console.log("arr1: ", arr1);

// Gộp Array
const arr2 = [...numbers, ...arr1];
console.log("arr2: ", arr2);

// Thêm phần tử
const arr3 = [0, ...numbers, 99];
console.log("arr3: ", arr3);

// Object
const user = {
    name: "An",
    age: 20
};

const user1 = {
    ...user,
    city: "Đà Nẵng"
}

console.log("user1: ", user1);

// Ghi đè property
const user2 = {
    ...user,
    name: "Hiếu"
}

console.log("user2: ", user2);