#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    void solve() {
        for (int n = 2; n <= 100; n++) {
            bool isPrime = true;
            for (int i = 2; i < n; i++) {
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                // Prime number found
            }
        }
    }
};
