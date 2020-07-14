'use strict';//严格语法

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var dic = {};
    var result = [];
	console.log('原始数据：%s',nums);
    for (var i = nums.length - 1; i >= 0; i--) {
    	var complement = target - nums[i];
    	if (complement in dic) {
    		result[0] = i;
    		result[1] = dic[complement];
    		return result;
    		break;
    	}
    	dic[nums[i]] = i;
    }
    return result;
};


console.log('结果是：',twoSum([1,2,8,12,42],9));


