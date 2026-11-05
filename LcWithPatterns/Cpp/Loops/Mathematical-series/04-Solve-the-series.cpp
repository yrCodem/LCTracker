#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    string solveSeries(int n) {
        string series = "";
        for (int i = 0; i <= n; i++) {
            series += to_string(1 << i);
            if (i < n) {
                series += " + ";
            }
        }
        return series;
    }
};
