// 官方链接：https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
// 移除元素

/**-------------------------------- mine -------------------------------- */


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===val){
//             nums.splice(i,1);
//             i--;
//         }
//     }
// };



/**-------------------------------- leetcode -------------------------------- */

var removeElement = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};

/**-------------------------------- test -------------------------------- */

var start_remove_element = function() {
    var nums1 = [0,1,2,2,3,0,4,2];
    var val = 2;
    removeElement(nums1,val);
    console.log("..........2..........");
    console.log(nums1);
};

export { start_remove_element }