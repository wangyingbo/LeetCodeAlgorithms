#!/bin/bash
# author wangyingbo
# date:2022-10-26 pm 15:27

# 自增数字
UPDATE_INCREASE=0
# 日期
UPDATE_DATE=`date +%Y%m%d%H%M%S`
UPDATE_DATE=`date "+%Y-%m-%d %H:%M:%S"`
# 缓存文件路径
CACHE_PATH=./temp/version.data
# 用webpack生成的js文件
file_bundle=./dist/bundle.js
# ftp服务器上配置表的路径
FTPCONFIGURATIONDIR="/UI_Image/Video/ConfigurationTable"
# 版本
VERSION=1.0
UUIDSTRING=0


green(){
	echo -e "\033[32;40m $1 \033[0m"
}
red(){
	echo -e "\033[31;40m $1 \033[0m"
}
yellow(){
	echo -e "\033[33;40m $1 \033[0m"
}

get_increase_number() {
	if [[ -e ${CACHE_PATH} ]]; then
		NUM=$(tail -n 1 ${CACHE_PATH})
		# return $NUM
	else 
		yellow "warning: version.data 不存在！！"
		echo "version:${VERSION}|build:${UPDATE_INCREASE}|date:${UPDATE_DATE}|uuid:${UUIDSTRING}" >> ${CACHE_PATH}
	fi
}

get_increase_number

lastLine=$(tail -n 1 ${CACHE_PATH})
oriversion=$(echo $lastLine | awk -F\| '{ print $1}' | awk -F: '{ print $2}')
build=$(echo $lastLine | awk -F\| '{ print $2}' | awk -F: '{ print $2}')

genuuid(){
	olduuid=`uuidgen`
	# echo "生成的uuid是：${olduuid}"
	uuid=$(echo $olduuid | tr -d "-")
	# echo "最后的uuid是：${uuid}"
	UUIDSTRING=${uuid}
}

if [[ -z $1 ]]; then
	UUIDSTRING=$(echo $lastLine | awk -F\| '{ print $4}' | awk -F: '{ print $2}')
	origindate=$(echo $lastLine | awk -F\| '{ print $3}')
	UPDATE_DATE=${origindate#*:}
else
	genuuid
	UPDATE_DATE=`date "+%Y-%m-%d %H:%M:%S"`
fi

needuploadbundle=0
if [[ $1 = 'release' ]]; then
	# needuploadbundle=1
    needuploadbundle=0
	if [[ -z $2 ]]; then
		echo ""
	else
		oriversion=$2
	fi
elif [[ $1 = 'build' ]]; then
	if [[ -z $2 ]]; then
		echo ""
		build=$((${build}+1))
	else
		build=$2
	fi
fi
UPDATE_INCREASE=${build}
VERSION=${oriversion}


result="version:${VERSION}|build:${UPDATE_INCREASE}|date:${UPDATE_DATE}|uuid:${UUIDSTRING}"
echo $result > ${CACHE_PATH}
green "current version info:"
green "${result}"
# echo $result | pbcopy
statement="var version = '${result}';"
# echo $statement >> $file_bundle
sed -i '' "1i\\
$statement
" $file_bundle
echo -e "\n"

# 上传bundle.js到ftp服务器
if [[ $needuploadbundle -eq 1 ]]; then
	commandwbcompile=$(command -v wbcompile)
	if [[ -z $commandwbcompile ]]; then
		red "please install wbcompile for uploading"
		exit 1
	fi
	wbcompile -l $FTPCONFIGURATIONDIR $file_bundle
fi
