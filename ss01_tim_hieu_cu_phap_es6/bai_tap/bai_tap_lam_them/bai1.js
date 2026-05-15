// Sử dụng ES6 ( arrow function, fitter)
// 1. Viết hàm kiểm tra 1 số có phải là số nguyên tố
const checkPrimeNumber = (number) => {
    for (let i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrimeNumber(13));

// 2. Cho 1 mảng số nguyên. Sử dụng filter để lọc ra các số là số nguyên tố
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter(number => checkPrimeNumber(number));
console.log(primeNumbers);