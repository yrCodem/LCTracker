import java.util.*;

class Solution {
    public int productOfDigits(int num) {
        long product = 1;
        while (num > 0) {
            int digit = num % 10;
            product = product * digit;
            num = num / 10;
        }
        return (int)product;
    }
}
