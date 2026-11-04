import java.util.*;

class Solution {
    public int reverseNumber(int num) {
        int reversedNum = 0;
        do {
            int digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num /= 10;
        } while (num > 0);
        return reversedNum;
    }
}
