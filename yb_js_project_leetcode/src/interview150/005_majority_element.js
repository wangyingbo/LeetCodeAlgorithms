// 官方链接：https://leetcode.cn/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
//

/**-------------------------------- mine -------------------------------- */




/**-------------------------------- leetcode -------------------------------- */

var majority_element = function(nums) {
    let a = Math.floor(nums.length/2);
    console.log("n/2长度是"+a)

    let map = {}
    nums.forEach(element => {
        let count = 0;
        let key = Number(element).toString();
        if (map[key]) {
            count = map[key];
        }
        count += 1;
        map[key] = Number(count);
    });

    console.log("map是",map);
};


/**-------------------------------- test -------------------------------- */

/**
 * @param {number[]} nums
 * @return {number}
 */
var test_majority_element = function() {
    majority_element([2,2,1,1,1,2,2])
};

export { test_majority_element }