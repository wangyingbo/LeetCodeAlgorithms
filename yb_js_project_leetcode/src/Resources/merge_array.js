/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    var total = [];
        let head1 = nums1.pop();
        let head2 = nums2.pop();
    var yb_merge = function(anums1,am,anums2,an) {
        if (!anums1.length) {
            total.concat(anums2);
            return
        }
        if (!anums2.length) {
            total.concat(anums1);
            return
        }
        if (head2<head1){
            total.push(head2);
            head2 = anums2.pop();
        }else {
            total.push(head1);
            head1 = anums1.pop();
        }
        yb_merge(anums1,am,anums2,an);
    }
    yb_merge(nums1,m,nums2,n);
    nums1 = total
};

var merge_array_start = function() {
    var nums1 = [1,2,3,0,0,0];
    var nums2 = [2,5,6];
    var total = merge(nums1,3,nums2,3);
    console.log("....................");
    console.log(total);
}

export {merge_array_start}