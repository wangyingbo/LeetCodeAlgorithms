

/**	题目描述
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/
//js链表的实现	http://www.liuyiqi.cn/2017/02/15/linked-list/
//js题目解题过程	http://www.liuyiqi.cn/2017/03/12/add-two-numbers/



/**
/**algorithms
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    console.log(l1);
    //c1,c2,c3是当前链表的指针head
    var c1 = l1,
    c2 = l2,
    l3, c3,//l3是新构建的链表
    carry = 0;//大于10需要进位到下一位的数

	  while (c1 || c2 || carry) {
	    var v1 = 0,//v1和v2是每个node节点上的值
	      v2 = 0;
	    
	    // 这么做是为了防止整数中当前位上没有数字
	    if (c1) {
	      v1 = c1.val;
	      c1 = c1.next;
	    }
	    if (c2) {
	      v2 = c2.val;
	      c2 = c2.next;
	    }
	    var sum = v1 + v2 + carry;
	    carry = Math.floor(sum / 10);
	    if (!c3) {
	      l3 = new ListNode(sum % 10);
	      c3 = l3;
	    } else {
	      c3.next = new ListNode(sum % 10);
	      c3 = c3.next;
	    }
	  }

  	return l3;
};

console.log('hello, this is a listNode test');

