//https://www.jianshu.com/p/72456ea14b1b

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TRUE 1
#define FALSE 0

#define SUB_NODE_COUNT 26

typedef struct node {
    struct node* children[SUB_NODE_COUNT];
    int flag;
    char character;
} Node;

Node* create_node(char c, int flag) {
    Node* n = malloc(sizeof(Node));
    n->character = c;
    n->flag = flag;
    for (int i = 0; i < SUB_NODE_COUNT; i++) {
        n->children[i] = NULL;
    }
    return n;
}

int append_node(Node* n, char c) {

    Node* child_ptr =  n->children[c-'a'];
    if (child_ptr) {
        return FALSE;
    }
    else {
        n->children[c-'a'] = create_node(c, FALSE);
        return TRUE;
    }
}

int add_word(Node* root, char* str) {
    char c = *str;
    Node* ptr = root;
    int flag = TRUE;
    while(c != '\0') {
        if (!append_node(ptr, c)) {
             flag = FALSE;
        }
        ptr = ptr->children[c-'a'];
        c = *(++str);
    }
    if (!ptr->flag) {
        flag = FALSE;
        ptr->flag = TRUE;
    }
    return !flag;
}

void traversal(Node* root, char* str) {

    if (!root) {
        return;
    }

    int len_of_str = strlen(str);
    char* new_str = malloc(len_of_str+1);
    strcpy(new_str, str);
    new_str[len_of_str] = root->character;

    if (root->flag) {
        //输出
        char* str_for_print = malloc(len_of_str+2);
        strcpy(str_for_print, new_str);
        str_for_print[len_of_str+1] = '\0';
        printf("%s\n", str_for_print);
        free(str_for_print);
    }

    for (int i = 0; i < SUB_NODE_COUNT; i++) {
        traversal(root->children[i], new_str);
    }
    free(new_str);
}

int check(Node* root, char* word) {
    Node* ptr = root;
    int len = strlen(word);
    for (int i = 0; i < len; i++) {
        if (!ptr) {
            printf("\"%s\" isn't in the Dictionary!\n", word);
            return FALSE;
        }
        ptr = ptr->children[word[i]-'a'];
    }
    if (ptr && ptr->flag) {
        printf("\"%s\" is in the Dictionary!\n", word);
        return TRUE;
    } else {
        printf("\"%s\" isn't in the Dictionary!\n", word);
        return FALSE;
    }

}

int isLeave(Node* root) {
    for (int i = 0; i < SUB_NODE_COUNT; i++) {
        if (root->children[i]) {
            return FALSE;
        }
    }
    return TRUE;
}

int delete_word(Node* root, char* word) {
    int len = strlen(word);
    int first_index = word[0] - 'a';
    if (!root->children[first_index]) {
        return FALSE;
    }
    if (len == 1) {
        if (root->children[first_index]->flag) {
            if (isLeave(root->children[first_index])) {
                free(root->children[first_index]);
                root->children[first_index] = NULL;
            } else {
                root->children[first_index]->flag = FALSE;
            }
            return TRUE;
        } else {
            return FALSE;
        }
    }
    int flag = delete_word(root->children[first_index], word+1);
    if (isLeave(root->children[first_index]) && !root->children[first_index]->flag) {
        free(root->children[first_index]);
        root->children[first_index] = NULL;
    }
    return flag;
}



// int main(void) {
//     Node *root = create_node('$', FALSE);

//     //测试add_ word函数
//     add_word(root, "abc");
//     add_word(root, "abcd");
//     add_word(root, "world");
//     add_word(root, "nnaiodnf"); 
//     traversal(root, "");

//     //测试check函数 
//     check(root, "abc");
//     check(root, "abcd");

//     //测试delete_word函数
//     delete_word(root, "abe");
//     check(root, "abe");

//     return EXIT_SUCCESS;
// }
