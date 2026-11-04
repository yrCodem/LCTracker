import java.util.*;

class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        long num = x;
        long original = num;
        long reversedNum = 0;
        do {
            long digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = num / 10;
        } while (num > 0);
        return original == reversedNum;
    }
}
