console.log("--------中位数是---------");

/**
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    if (m>n) {//确保m<=n
    	var tempList = nums1;
    	nums1 = nums2;
    	nums2 = tempList;
    	var tmp = m;
    	m = n;
    	n = tmp;
    }

    var iMin = 0;
    var	iMax = m;
    var	halfLen = parseInt((m+n+1)/2); //转为整型
    while(iMin<=iMax) {
    	var i = parseInt((iMin + iMax)/2);
    	var j = halfLen - i;
    	if (i<iMax && nums2[j-1]>nums1[i]) {
    		iMin = i + 1;	//i取值太小了，需要加
    	} else if (i>iMin && nums1[i-1]>nums2[j]) {
    		iMax = i - 1;	//i取值太大了，需要减
    	}else {
    		var maxLeft = 0;	//左半部分的最大值
    		if (i == 0) { maxLeft = nums2[j-1]; }
    		else if (j == 0) { maxLeft = nums1[i-1]; }
    		else { maxLeft = Math.max(nums1[i-1],nums2[j-1]); }
    		if ((m+n)%2 == 1) {
    			return maxLeft;
    		}
    		var minRight = 0;	//右半部分的最小值
    		if (i == m) { minRight = nums2[j]; }
    		else if (j == n) { minRight = nums1[i]; }
    		else { minRight = Math.min(nums2[j],nums1[i]); }
    		return (maxLeft + minRight)/2.0;
    	}
    }

    return 0;
};


console.log(findMedianSortedArrays([1,2],[3,4]));






