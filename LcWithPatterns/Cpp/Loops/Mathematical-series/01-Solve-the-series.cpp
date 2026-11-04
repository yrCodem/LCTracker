#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    long long sumOfSquares(int n) {
        long long sum = 0;
        for (long long i = 1; i <= n; ++i) {
            sum += i * i;
        }
        return sum;
    }
};
