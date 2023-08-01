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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interview150_1_merge_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interview150/1_merge_array.js */ \"./src/interview150/1_merge_array.js\");\n\n\nconsole.log(\"hello world\");\n\n(0,_interview150_1_merge_array_js__WEBPACK_IMPORTED_MODULE_0__.merge_array_start)();\n\n//# sourceURL=webpack://yb_js_project_leetcode/./src/index.js?");

/***/ }),

/***/ "./src/interview150/1_merge_array.js":
/*!*******************************************!*\
  !*** ./src/interview150/1_merge_array.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   merge_array_start: () => (/* binding */ merge_array_start)\n/* harmony export */ });\n\n// https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150\n\n/**\n * @param {number[]} nums1\n * @param {number} m\n * @param {number[]} nums2\n * @param {number} n\n * @return {void} Do not return anything, modify nums1 in-place instead.\n */\n// var merge = function(nums1, m, nums2, n) {\n//     var total = [];\n//     if (nums1.length < 1) {\n//         total = nums2;\n//         nums1.push.apply(nums2,total);\n//         return\n//     }\n//     if (nums2.length < 1) {\n//         return\n//     }\n//     var lastFirst1 = undefined;\n//     var lastFirst2 = undefined;\n//     var yb_shift = function(lastFirst, arr) {\n//         let first = arr.shift();\n//         if (first === undefined) {\n//             return undefined;\n//         }\n//         if (lastFirst !== undefined && first < lastFirst) {\n//             return yb_shift(arr);\n//         }\n//         lastFirst = first;\n//         return first;\n//     }\n//     let head1 = yb_shift(lastFirst1,nums1);\n//     let head2 = yb_shift(lastFirst2,nums2);\n//     var yb_merge = function(anums1,am,anums2,an) {\n//         console.log(\"head1:\",head1,\"head2:\",head2);\n//         if (head2<head1){\n//             if (head2 !== undefined) {\n//                 total.push(head2);\n//                 head2 = yb_shift(lastFirst2,anums2);\n//             }else {\n//                 total.push(head1);\n//                 head1 = yb_shift(lastFirst1,anums1);\n//             }\n//         }\n//         else if (head2 >= head1) {\n//             if (head1 !== undefined) {\n//                 total.push(head1);\n//                 head1 = yb_shift(lastFirst1,anums1);\n//             }else {\n//                 total.push(head2);\n//                 head2 = yb_shift(lastFirst2,anums2);\n//             }\n//         }\n//         if (head1 !== undefined || head2 !== undefined) {\n//             yb_merge(anums1,am,anums2,an);\n//         }\n//     }\n//     yb_merge(nums1,m,nums2,n);\n//     console.log(total);\n//     for (let i=0;i<total.length;i++) {\n//         nums1[i] = total[i];\n//     }\n// };\n\n\nvar merge = function(nums1, m, nums2, n) {\n    \n};\n\nvar merge_array_start = function() {\n    var nums1 = [-1,0,0,3,3,3,0,0,0];\n    var nums2 = [1,2,2];\n    merge(nums1,6,nums2,3);\n    console.log(\"....................\");\n    console.log(nums1);\n}\n\n\n\n//# sourceURL=webpack://yb_js_project_leetcode/./src/interview150/1_merge_array.js?");

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
/******/ 	
/******/ })()
;