#自动遍历子目录的通用Makefile https://blog.csdn.net/helaisun/article/details/79618485
#Makefile有三个非常有用的变量。分别是$@，$^，$<代表的意义分别是：　　
#$@       目标文件   
#$^         所有的依赖文件  
#$<        第一个依赖文件　　如果我们


SHELL = /bin/bash

AllDirs := $(shell ls -R | grep '^\./.*:$$' | awk '{gsub(":","");print}') .  
Sources := $(foreach n,$(AllDirs) , $(wildcard $(n)/*.c))  
Objs := $(patsubst %.c,%.o, $(Sources))  
Deps := $(patsubst %.c,%.d, $(Sources))  
StaticLib := libyy.a
DynamicLib := libyy.so
Bin := obj

AllLibs : $(Bin)

CC = gcc
CXX = g++
RM = rm -f
CXXFLAGS = -g -Wall
CPPFLAGS = $(foreach n,$(AllDirs) , -I$(n))
LDFLAGS = -lstdc++

$(StaticLib) : $(Objs)
	ar rcs $@ $^

$(DynamicLib) : $(Objs)
	$(CC) -shared -o $@ $^ $(LDFLAGS)

$(Bin) : $(Objs)
	$(CC) $(Objs) -o $@

%.d : %.cpp
	$(CC) -MT"$(<:.c=.o) $@" -MM $(CXXFLAGS) $(CPPFLAGS) $< > $@

sinclude $(Deps)

clean:
	$(RM) $(Objs) $(Deps) $(Bin)

.PHONY : clean

