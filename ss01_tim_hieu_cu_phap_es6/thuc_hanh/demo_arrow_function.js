// Arrow Function
const sum = (a, b) => {
    return a + b;
}

// Nếu function chỉ có 1 dòng return:
const sum2 = (a, b) => a + b;

// Một tham số
// Có thể bỏ ()
const square = x => x * x;

// Không có tham số
// Phải có ()
const hello = () => "Hello World";

// Return object
// Phải bọc object bằng ()
const getUser = () => ({
    name : "John",
    age : 20
})

// Arrow Function với Array Methods
// Đây là nơi Arrow Function được dùng nhiều nhất.
const numbers = [1, 2, 3];
// map()
const doubled =  numbers.map(number => number * 2);
console.log(doubled);

// filter()
const even = numbers.filter(number => number % 2 === 0);
console.log(even);

// find()
const users = [
    { name: "An" },
    { name: "Bình" }
];

const user = users.find(user => user.name === "Bình");
console.log(user);

// Điểm khác biệt QUAN TRỌNG: this
// Đây là phần quan trọng nhất của Arrow Function.
const person = {
    name: "An",

    sayHello: function () {
        console.log(this.name);
    }
};

person.sayHello();

// Arrow Function KHÔNG có this riêng
const person2 = {
    name: "An",

    sayHello: () => {
        console.log(this.name);
    }
};

person2.sayHello();

// Vì sao?
//
// Arrow function không tạo:
//
// this
// arguments
// super
// new.target
//
// Nó “mượn” từ scope cha.

// Khi nào nên dùng Arrow Function
// ✅ Callback
setTimeout(() => {
    console.log("Hello")
}, 1000);

// ✅ map/filter/reduce
const result = arr.map(x => x * 2);

// ✅ Function ngắn gọn
const add = (a, b) => a + b;

// Khi KHÔNG nên dùng
// ❌ Method object
const user = {
    name: "An",
    sayHi: () => {
        console.log(this.name);
    }
};

// ❌ Constructor
const Person = (name) => {
    this.name = name;
};

const p = new Person("An");


