var __wb__webpack_exports__;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __main__: () => (/* binding */ __main__)\n/* harmony export */ });\n/* harmony import */ var _interview150_1_merge_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interview150/1_merge_array.js */ \"./src/interview150/1_merge_array.js\");\n\n\n\n(0,_interview150_1_merge_array_js__WEBPACK_IMPORTED_MODULE_0__.start_merge_array)();\n\n\n\nvar __main__ = function() {\n    console.log(\"hello world\");\n}\n\n\n\n//# sourceURL=webpack://yb_js_project_leetcode/./src/index.js?");

/***/ }),

/***/ "./src/interview150/1_merge_array.js":
/*!*******************************************!*\
  !*** ./src/interview150/1_merge_array.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   start_merge_array: () => (/* binding */ start_merge_array)\n/* harmony export */ });\n\n// https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150\n\n/**-------------------------------- mine -------------------------------- */\n\n// /**\n//  * @param {number[]} nums1\n//  * @param {number} m\n//  * @param {number[]} nums2\n//  * @param {number} n\n//  * @return {void} Do not return anything, modify nums1 in-place instead.\n//  */\n// var merge = function(nums1, m, nums2, n) {\n//     var total = [];\n//     if (nums1.length < 1) {\n//         total = nums2;\n//         nums1.push.apply(nums2,total);\n//         return\n//     }\n//     if (nums2.length < 1) {\n//         return\n//     }\n//     var lastFirst1 = undefined;\n//     var lastFirst2 = undefined;\n//     var yb_shift = function(lastFirst, arr) {\n//         let first = arr.shift();\n//         if (first === undefined) {\n//             return undefined;\n//         }\n//         if (lastFirst !== undefined && first < lastFirst) {\n//             return yb_shift(arr);\n//         }\n//         lastFirst = first;\n//         return first;\n//     }\n//     let head1 = yb_shift(lastFirst1,nums1);\n//     let head2 = yb_shift(lastFirst2,nums2);\n//     var yb_merge = function(anums1,am,anums2,an) {\n//         console.log(\"head1:\",head1,\"head2:\",head2);\n//         if (head2<head1){\n//             if (head2 !== undefined) {\n//                 total.push(head2);\n//                 head2 = yb_shift(lastFirst2,anums2);\n//             }else {\n//                 total.push(head1);\n//                 head1 = yb_shift(lastFirst1,anums1);\n//             }\n//         }\n//         else if (head2 >= head1) {\n//             if (head1 !== undefined) {\n//                 total.push(head1);\n//                 head1 = yb_shift(lastFirst1,anums1);\n//             }else {\n//                 total.push(head2);\n//                 head2 = yb_shift(lastFirst2,anums2);\n//             }\n//         }\n//         if (head1 !== undefined || head2 !== undefined) {\n//             yb_merge(anums1,am,anums2,an);\n//         }\n//     }\n//     yb_merge(nums1,m,nums2,n);\n//     console.log(total);\n//     for (let i=0;i<total.length;i++) {\n//         nums1[i] = total[i];\n//     }\n// };\n\n\n\n// var merge = function(nums1, m, nums2, n) {\n//     if (m === 0) {\n//         nums1.splice(0,nums1.length);\n//         nums1.push.apply(nums1,nums2);\n//         return;\n//     }\n//     var deleteSuffix = function(arr) {\n//         let last = arr[arr.length - 1];\n//         let first = arr[0];\n//         if (arr.length >=2) {\n//             let preLast = arr[arr.length - 2];\n//             if (last < preLast || last < first || (preLast === 0 && last === 0)) {\n//                 arr.pop();\n//                 deleteSuffix(arr);\n//             }\n//         }else if (arr.length === 1 && first === 0) {\n//             arr.pop();\n//         }\n//     }\n//     deleteSuffix(nums1);\n//     deleteSuffix(nums2);\n//     console.log(nums1);\n//     m = nums1.length;\n//     n = nums2.length;\n\n//     var lastIndex = 0;\n//     for(let i = 0;i < n;i++) {\n//         let num2 = nums2[i];\n//         for (let j = lastIndex; j < m + n + 1; j ++) {\n//             if (j === nums1.length) {\n//                 let nums1Length = nums1.length;\n//                 nums1.splice(nums1Length, 0, num2);\n//                 lastIndex = nums1Length + 1;\n//                 break;\n//             }\n\n//             let num1 = nums1[j];\n//             if (num2 <= num1) {\n//                 nums1.splice(j, 0, num2);\n//                 lastIndex = j + 1;\n//                 break;\n//             }\n//         }\n//     }\n// };\n\n\n\n/**-------------------------------- leetcode -------------------------------- */\n\n\n// 官方解法一：双指针\n// var merge = function(nums1, m, nums2, n) {\n//     let p1 = 0, p2 = 0;\n//     const sorted = new Array(m + n).fill(0);\n//     var cur;\n//     while (p1 < m || p2 < n) {\n//         if (p1 === m) {\n//             cur = nums2[p2++];\n//         } else if (p2 === n) {\n//             cur = nums1[p1++];\n//         } else if (nums1[p1] < nums2[p2]) {\n//             cur = nums1[p1++];\n//         } else {\n//             cur = nums2[p2++];\n//         }\n//         sorted[p1 + p2 - 1] = cur;\n//     }\n//     for (let i = 0; i != m + n; ++i) {\n//         nums1[i] = sorted[i];\n//     }\n// };\n\n\n\n// 官方解法二：逆向双指针\n// var merge = function(nums1, m, nums2, n) {\n//     let p1 = m - 1, p2 = n - 1;\n//     let tail = m + n - 1;\n//     var cur;\n//     while (p1 >= 0 || p2 >= 0) {\n//         if (p1 === -1) {\n//             cur = nums2[p2--];\n//         } else if (p2 === -1) {\n//             cur = nums1[p1--];\n//         } else if (nums1[p1] > nums2[p2]) {\n//             cur = nums1[p1--];\n//         } else {\n//             cur = nums2[p2--];\n//         }\n//         nums1[tail--] = cur;\n//     }\n// };\n\n\n\n// 个人解法：从后向前数组遍历\n/**\n * @param {number[]} nums1\n * @param {number} m\n * @param {number[]} nums2\n * @param {number} n\n * @return {void} Do not return anything, modify nums1 in-place instead.\n */\nvar merge = function(nums1, m, nums2, n) {\n    let len1 = m - 1;\n    let len2 = n - 1;\n    let len = m + n - 1;\n    while(len1 >= 0 && len2 >= 0) {\n        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码\n        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];\n    }\n    function arrayCopy(src, srcIndex, dest, destIndex, length) {\n        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));\n    }\n    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1\n    arrayCopy(nums2, 0, nums1, 0, len2 + 1);\n};\n\n\n\n/**-------------------------------- test -------------------------------- */\n\nvar start_merge_array = function() {\n    var nums1 = [-1,0,0,3,3,3,0,0,0];\n    var nums2 = [1,2,2];\n    merge(nums1,6,nums2,3);\n    console.log(\"....................\");\n    console.log(nums1);\n};\n\n\n\n\n//# sourceURL=webpack://yb_js_project_leetcode/./src/interview150/1_merge_array.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
__wb__webpack_exports__ = __webpack_exports__;/******/ 	
/******/ })()
;

var __main__ = __wb__webpack_exports__.__main__;
