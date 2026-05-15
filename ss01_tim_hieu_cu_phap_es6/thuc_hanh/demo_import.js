import {PI, sum, multiply} from "./demo_export.js";

console.log(PI);
console.log(sum(2, 3));
console.log(multiply(2, 3));

// Import phải đúng tên
// Lỗi
// import {add} from "./demo_export.js";
// console.log(add(2, 3));

// Đổi tên khi import
import {sum2 as add} from "./demo_export.js";
console.log(add(2, 3));

import {sum3} from "./demo_export.js";
console.log(sum3(2, 3));

import log from "./logger.js";
log("Hello word");

// Import tất cả bằng *
import * as math from "./demo_export.js";
console.log(math.PI);
console.log(math.sum(2, 3));
console.log(math.multiply(2, 3));

// Side Effect Import
// Chỉ chạy file mà không lấy gì.
import "./config.js";
// Thường dùng để:
//
// setup
// config
// CSS
// polyfill

import {sum5, upper} from "./index.js";

// Dynamic Import
// Load module khi cần.
const module = await import("./module.js");
console.log(module.sum(2, 3));