// Trong function
function sum(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(sum(1, 2, 3));

// Kết hợp tham số thường
function introduce(name, ...hobbies) {
    console.log(name);
    console.log(hobbies);
}

introduce("Hiếu", "football", "music", "badminton", "movie");

// Rest trong Destructuring
const arr = [1, 2, 3, 4];
const [a, b, ...rest] = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(rest);