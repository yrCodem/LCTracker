#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void generateFibonacci() {
        int n = 10;
        int a = 0;
        int b = 1;
        int count = 1;

        do {
            int nextNum = a + b;
            a = b;
            b = nextNum;
            count++;
        } while (count <= n);
    }
};
