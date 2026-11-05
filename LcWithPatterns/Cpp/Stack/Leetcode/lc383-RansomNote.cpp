#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char, int> charConstructMagazine;

        for (char ch : magazine) {
            charConstructMagazine[ch]++;
        }

        for (char ch : ransomNote) {
            int count = charConstructMagazine[ch];
            if (count == 0) {
                return false;
            }
            charConstructMagazine[ch] = count - 1;
        }
        return true;
    }
};
