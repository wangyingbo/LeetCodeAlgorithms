var lengthOfLongestSubstring = function(s) {
	var n = s.length,
		list = [];
	var maxLength = 0,i = 0,j = 0;
	while (i<n && j<n) {
		if (!list.includes(s[j])) {
			list.push(s[j]);
			j++;
			maxLength = Math.max(maxLength, j - i);
			// console.log(`${j}-${i}`);
		}else {
			list.shift();
			i++;
			// console.log("i的值"+`${i}`);
		}
		// console.log(list);
	}

	return maxLength;
}

var lengthOfLongestSubstringOther = function(s) {
	
}


console.log(lengthOfLongestSubstring("pwwkew"));