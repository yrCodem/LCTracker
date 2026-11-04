#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    int sumEvenUpToN(int n) {
        int i = 1;
        int sum = 0;
        while (i <= n) {
            if (i % 2 == 0) {
                sum = sum + i;
            }
            i++;
        }
        return sum;
    }
};
