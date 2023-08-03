#!/bin/bash
# author wangyingbo
# date:2022-10-11 pm 19:15

# 入口文件
file_entry=./src/index.js
# 用webpack生成的js文件
file_bundle=./dist/bundle.js

green(){
	echo -e "\033[32;40m $1 \033[0m"
}
red(){
	echo -e "\033[31;40m $1 \033[0m"
}
yellow(){
	echo -e "\033[33;40m $1 \033[0m"
}

npx=$(command -v npx)
if [[ -z $npx ]]; then
	red "npx command not found!"
	exit 1
fi

# 重新生成bundle.js
npx webpack

if [[ -e $file_bundle ]]; then
	echo -e ""
else
	echo -e "\n"
	red "${file_bundle} not exsit!"
	exit 1
fi

file=$(ls $file_entry 2> /dev/null | wc -l) # 判断目录下是否存在已知后缀名文件
if [ $file -ne 0 ] ; then 
	echo -e ""
	# green "congratulations, the file exsit!"
else
	echo -e "\n"
	red "warning: no ${file_entry}, please check the entry file!!!"
	exit 1
fi

# 匹配以export开头，以}结尾的字符串
# exportStr=$(grep "\bexport\b\s*{.*}" $file_entry | awk -F{ '{ print $2}' | awk -F} '{ print $1}')
exportInLine=$(pcregrep -Mo "^export(\n|.)*{(\n|.)*};" $file_entry | tr "\n" " ")
exportStr=$(echo $exportInLine | awk -F{ '{ print $2}' | awk -F} '{ print $1}')

if [[ -z exportStr ]]; then
	red "entry export is null!"
	exit 1
fi

echo -e "\n"
yellow "current entry file's export objects:\n"
green "$exportStr"
echo -e "\n"

WB_EXPORT_NAME="__wb__webpack_exports__"
# 在首行声明
WB_EXPORT_STATEMENT=`echo "var ${WB_EXPORT_NAME};"`
sed -i '' "1i\\
$WB_EXPORT_STATEMENT
" $file_bundle

# 赋值
WB_EXPORT_ASSIGN=`echo "$WB_EXPORT_NAME = __webpack_exports__;"`
assign_place_str="var\ __webpack_exports__"
# sed -i "" "/$assign_place_str/a \\
# $WB_EXPORT_ASSIGN" $file_bundle
place_num=$(grep -n "${assign_place_str}" $file_bundle | awk -F: '{ print $1}')
sed -i "" "${place_num}a \\
$WB_EXPORT_ASSIGN" $file_bundle

# for each
array=(${exportStr//,/ })
num=${#array[@]}
if [[ num -eq 0 ]]; then
	red "current entry export object is null!"
	exit 1
fi
echo -e "\n" >> $file_bundle 
for exp in ${array[@]}
do
   # echo $exp
   varObject=`echo "var ${exp} = ${WB_EXPORT_NAME}.${exp};"`
   echo $varObject >> $file_bundle
done

green "congratulations, webpack has done!!!"
echo -e "\n"