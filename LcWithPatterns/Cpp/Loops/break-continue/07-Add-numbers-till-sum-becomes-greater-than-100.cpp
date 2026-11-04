#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void solve() {
        int sum = 0;
        int i = 1;
        for (; i <= 100; i++) {
            sum = sum + i;
            if (sum > 100)
                break;
        }
    }
};
