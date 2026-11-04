#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    void searchNumber() {
        vector<int> n = {10, 20, 30, 40, 50};
        int target = 30;
        bool found = false;

        for (size_t i = 1; i <= n.size(); i++) {
            if (n[i] == target) {
                found = true;
                break;
            }
        }
    }
};
