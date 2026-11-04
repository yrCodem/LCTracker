#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) return false;
        long long num = x;
        long long original = num;
        long long reversedNum = 0;
        do {
            long long digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = num / 10;
        } while (num > 0);
        return original == reversedNum;
    }
};
