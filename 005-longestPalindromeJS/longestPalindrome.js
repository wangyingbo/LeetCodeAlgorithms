
/**此方法找的是最长的相同字符串
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//     let maxLength = 1;
//     let startIndex = 0;
//     let map = {};
//     for (var i = 0; i < s.length; i++) {
//     	let indexStr = s[i];

//     	if (!map[indexStr]) {
//     		map[indexStr] = String(i);
//     	}else {
//     		let tempL = (i - parseInt(map[indexStr]) + 1 );
//     		if (tempL>maxLength) {
//     			console.log(`${tempL} > ${maxLength}`)
//     			maxLength = tempL;
//     			startIndex = parseInt(map[indexStr]);
//     		}else {

//     		}
//     		//要不要去重
//     		map[indexStr] = String(i);
//     	}
//     }

//     console.log(startIndex);
//     console.log(maxLength);

//     return s.substr(startIndex,maxLength);
// };




/**/
var longestPalindrome = function(s) {
    let maxLength = 1;
    let startIndex = 0;
    let map = {};
    for (var i = 0; i < s.length; i++) {
    	let indexStr = s[i];

    	if (!map[indexStr]) {
    		map[indexStr] = String(i);
    	}else {
    		

    		let tempL = (i - parseInt(map[indexStr]) + 1 );
    		if (tempL>maxLength) {
    			console.log(`${tempL} > ${maxLength}`)
    			maxLength = tempL;
    			startIndex = parseInt(map[indexStr]);
    		}else {

    		}
    		//要不要去重
    		map[indexStr] = String(i);
    	}
    }

    console.log(startIndex);
    console.log(maxLength);

    return s.substr(startIndex,maxLength);
};

console.log(longestPalindrome("ccc"));