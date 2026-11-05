#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        vector<char> stack;
        unordered_map<char, char> pairs = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };

        for (char ch : s) {
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push_back(ch);
            } else {
                if (stack.empty()) {
                    return false;
                }
                char top = stack.back();
                stack.pop_back();
                if (top != pairs[ch]) {
                    return false;
                }
            }
        }
        return stack.empty();
    }
};
