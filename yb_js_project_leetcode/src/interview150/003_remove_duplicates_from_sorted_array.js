// 官方链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
// 删除有序数组中的重复项 （简单）

/**-------------------------------- mine -------------------------------- */

/**
 * @param {number[]} nums
 * @return {number}
 */
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

    return nums;
};


/**-------------------------------- leetcode -------------------------------- */




/**-------------------------------- test -------------------------------- */

var start_remove_duplicates_from_sorted_array = function() {
    let nums = [1,1,1,2,2,3];
    let newNums = removeDuplicates(nums);
    console.log("..........3..........");
    console.log(newNums);
};


export { start_remove_duplicates_from_sorted_array }