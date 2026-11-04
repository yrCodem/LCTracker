#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    void solve() {
        long long n = 50;
        long long i = 1;
        long long factorial = 1;
        
        do {
            factorial = factorial * i;
            i++;
        } while (i <= n);
    }
};
