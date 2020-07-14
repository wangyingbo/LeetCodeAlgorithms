#include "header/header.h"


//函数原型，也叫函数声明
void butler(void);
//我自己的方法实现
int* twoSumMethod(int *nums, int numsSize, int target);
//官方方法实现
int* offifialMethod(int *nums, int numsSize, int target);//答案1



int main(void) {

	butler();

	return 0;
}

void butler (void) {
	int *p;
	int nums[] = {3, 2, 4, 11};
	int length = sizeof(nums) / sizeof(int);
	p = offifialMethod(nums,length,6);
	//printf("%d\n", *p);
	for (int i = 0; i < 2; ++i) {
		printf("array[%d] = %d\n",i, *(p+i));
	}
}

int* offifialMethod(int* nums, int numsSize, int target) {
	static int result[2];
	for (int i = 0; i < numsSize; ++i)
	{
	}
	return result;
}


/*我自己的解题思路*/
int* twoSumMethod(int* nums, int numsSize, int target) {
    printf("结果：\n");

    int length = numsSize;
    printf("长度：%d\n", length);

    static int r[2];

    for (int i = 0; i < length; ++i)
    {
    	for (int j = i+1; j < length; ++j)
    	{
    		//printf("first = %d, second = %d \n",nums[i],nums[j] );
    		if (nums[i]+nums[j] == target)
    		{
    			printf("成功时：first = %d, second = %d \n",nums[i],nums[j] );

    			r[0] = i;
    			r[1] = j;

    			break;
    		}
    		
    	}
    }

    return r;
}