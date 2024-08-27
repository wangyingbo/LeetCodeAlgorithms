// 官方链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
// 删除有序数组中的重复项（中等）

/**-------------------------------- mine -------------------------------- */




/**-------------------------------- leetcode -------------------------------- */




/**-------------------------------- test -------------------------------- */

// 删除有序数组中的重复项（中等）
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            nums[i + 1] = nums[j];
            i++;
            j++;
        }
    }

    return i + 1;

};


/**
 * @param {number[]} nums
 * @return {number}
 */
var start_remove_duplicates_from_sorted_array_2 = function(nums) {
    return removeDuplicates(nums);
};

export { start_remove_duplicates_from_sorted_array_2 }