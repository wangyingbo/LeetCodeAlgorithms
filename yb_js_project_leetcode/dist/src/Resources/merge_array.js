"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

// https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function merge(nums1, m, nums2, n) {
    var yb_shift = function yb_shift(arr) {
        var first = arr.shift();
        if (first === undefined) {
            return -1;
        }
        if (first <= 0) {
            yb_shift(arr);
        }
        return first;
    };
    var total = [];
    if (nums1.length < 1) {
        total = nums2;
        nums1.push.apply(nums2, total);
        return;
    }
    if (nums2.length < 1) {
        return;
    }
    var head1 = yb_shift(nums1);
    var head2 = yb_shift(nums2);
    var yb_merge = function yb_merge(anums1, am, anums2, an) {
        if (anums1.length < 1) {
            if (head2 > -1) {
                total.push(head2);
            }
            total = total.concat(anums2);
            return;
        }
        if (anums2.length < 1) {
            if (head1 > -1) {
                total.push(head1);
            }
            total = total.concat(anums1);
            return;
        }
        if (head2 < head1) {
            total.push(head2);
            head2 = yb_shift(anums2);
        } else {
            total.push(head1);
            head1 = yb_shift(anums1);
        }
        yb_merge(anums1, am, anums2, an);
    };
    yb_merge(nums1, m, nums2, n);
    console.log(total);
    for (var i = 0; i < total.length; i++) {
        nums1[i] = total[i];
    }
};

var merge_array_start = function merge_array_start() {
    var nums1 = [1];
    var nums2 = [];
    merge(nums1, 1, nums2, 0);
    console.log("....................");
    console.log(nums1);
};

exports.merge_array_start = merge_array_start;