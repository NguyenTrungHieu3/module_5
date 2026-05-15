// PHẦN 1 — Named Export
export const PI = 3.14;

export function sum(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export function sum2(a, b) {
    return a + b;
}

// Export cuối file
const sum3 = (a, b) => a + b;

export {sum3}

// Default Export
// Một file chỉ có 1 export chính.
// Sang file logger.js để kiểm tra
// Default export KHÔNG cần {}
// Default export có thể đổi tên tùy ý
// Một file có thể vừa default vừa named