#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    string reverseString(string s) {
        stack<char> st;
        for (char c : s) {
            st.push(c);
        }
        string result = "";
        while (!st.empty()) {
            result += st.top();
            st.pop();
        }
        return result;
    }
};
