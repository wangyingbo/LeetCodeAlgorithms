
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {//"abcabcbb"
	if (!s) return 0;
    var maxLength = 1;
    for (var i = 0; i < s.length; i++) {
    	var temp = 0;
    	for (var j = i+1; j < s.length; j++) {
    		var subString = s.substr(i,j-i+1);
    		
    		//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。
    		if (check(subString)) {
    			break;
    		}else {
    			console.log(subString);
    			temp = subString.length;
    			if (temp>maxLength) {
    				maxLength = temp;
    			}
    		}
    	}
    }

    return maxLength;
};

var check = function(s) {
	// for (var i = 0; i < s.length; i++) {
	// 	 var reg = new RegExp(s[i], "g");
	// 	 var time = s.match(reg).length;
	// 	 if (time>1) {
	// 	 	return true;
	// 	 }
	// }

	var str=s;
	  for(var i=0,hash={};i<str.length;i++){
	    if(hash[str[i]]){
	      hash[str[i]]++
	      if (hash[str[i]]>1) {
	      	return true;
	      }
	    }else{
	      hash[str[i]]=1;
	    }
	  }
	  console.dir(hash);
	  return false;
}




//js——统计字符串中每种字符出现的次数,出现次数最多的是？ 出现几次？
//https://blog.csdn.net/pedrojuliet/article/details/78028145
/**用hash值做*/
function showTimesHash(s) {
	var str=s;
	  for(var i=0,hash={};i<str.length;i++){
	    if(hash[str[i]]){
	      hash[str[i]]++
	      if (hash[str[i]]>1) {
	      	//return true;
	      }
	    }else{
	      hash[str[i]]=1;
	    }
	  }
	  console.dir(hash);
	  return 0;
}

/**用正则做*/
function showTimesRegex(s) {
	var str=s;
	var arr=str.split("")
	  .sort()
	  .join("")
	  .match(/([a-z])\1*/g)
	  .sort(function(a,b){
	return b.length-a.length; })
	console.log("出现最多的是: "+arr[0][0]
	  +"共"+arr[0].length+"次");
	var hash={};
	  arr.forEach(function(val){
	    hash[val[0]]=val.length;
	  });
	  console.dir(hash);
	  return 0;
}


console.log("结果是：%s",lengthOfLongestSubstring("aab"));

showTimesHash("helloworld");
showTimesRegex("helloworld");






