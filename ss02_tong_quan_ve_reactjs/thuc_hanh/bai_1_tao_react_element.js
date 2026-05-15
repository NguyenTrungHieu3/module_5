/**
 * Bài 1: Tạo React Element thuần (Không dùng JSX)
 * Mục tiêu: Hiểu rõ bản chất của React Element trước khi sử dụng JSX.
 * 
 * Yêu cầu:
 * 1. Hãy tạo một thẻ <button> với nội dung là "Click me!".
 * 2. Thẻ button này cần có class name là "btn-primary".
 * 3. Hãy viết mã JavaScript sử dụng `React.createElement` để tạo ra thẻ này.
 * 
 * Gợi ý cú pháp: React.createElement(type, props, children)
 */

import React from 'react';

// === VIẾT CODE CỦA BẠN Ở DƯỚI ĐÂY ===
const myButton = null;
const button = React.createElement("button", { className: "btn-primary" }, "Click me!");
export default myButton;
