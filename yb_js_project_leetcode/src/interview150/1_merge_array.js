
// https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     var total = [];
//     if (nums1.length < 1) {
//         total = nums2;
//         nums1.push.apply(nums2,total);
//         return
//     }
//     if (nums2.length < 1) {
//         return
//     }
//     var lastFirst1 = undefined;
//     var lastFirst2 = undefined;
//     var yb_shift = function(lastFirst, arr) {
//         let first = arr.shift();
//         if (first === undefined) {
//             return undefined;
//         }
//         if (lastFirst !== undefined && first < lastFirst) {
//             return yb_shift(arr);
//         }
//         lastFirst = first;
//         return first;
//     }
//     let head1 = yb_shift(lastFirst1,nums1);
//     let head2 = yb_shift(lastFirst2,nums2);
//     var yb_merge = function(anums1,am,anums2,an) {
//         console.log("head1:",head1,"head2:",head2);
//         if (head2<head1){
//             if (head2 !== undefined) {
//                 total.push(head2);
//                 head2 = yb_shift(lastFirst2,anums2);
//             }else {
//                 total.push(head1);
//                 head1 = yb_shift(lastFirst1,anums1);
//             }
//         }
//         else if (head2 >= head1) {
//             if (head1 !== undefined) {
//                 total.push(head1);
//                 head1 = yb_shift(lastFirst1,anums1);
//             }else {
//                 total.push(head2);
//                 head2 = yb_shift(lastFirst2,anums2);
//             }
//         }
//         if (head1 !== undefined || head2 !== undefined) {
//             yb_merge(anums1,am,anums2,an);
//         }
//     }
//     yb_merge(nums1,m,nums2,n);
//     console.log(total);
//     for (let i=0;i<total.length;i++) {
//         nums1[i] = total[i];
//     }
// };


var merge = function(nums1, m, nums2, n) {
    
};

var merge_array_start = function() {
    var nums1 = [-1,0,0,3,3,3,0,0,0];
    var nums2 = [1,2,2];
    merge(nums1,6,nums2,3);
    console.log("....................");
    console.log(nums1);
}

export {merge_array_start}