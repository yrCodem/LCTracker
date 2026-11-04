#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void generatePattern(int n) {
        for (int i = 1; i <= n; i++) {
            string pattern = "";
            for (int j = 1; j <= i; j++) {
                pattern += to_string(j);
            }
        }
    }
};
