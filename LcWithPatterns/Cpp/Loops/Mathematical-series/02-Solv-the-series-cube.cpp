#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    long long calculateSeriesSum(int n) {
        long long sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += (long long)i * i * i;
        }
        return sum;
    }
};
