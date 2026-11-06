#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& arr) {
        int n = arr.size();
        vector<int> stack;
        vector<int> result(n, -1);

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.empty() && stack.back() <= arr[i]) {
                stack.pop_back();
            }
            if (!stack.empty()) {
                result[i] = stack.back();
            }
            stack.push_back(arr[i]);
        }
        return result;
    }
};
