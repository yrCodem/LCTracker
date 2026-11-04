#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int sumOfFirstN(int n) {
        int i = 1;
        int sum = 0;
        while (i <= n) {
            sum = sum + 1;
            i++;
        }
        return sum;
    }
};
