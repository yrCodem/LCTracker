import java.util.*;

class Solution {
    public void solve() {
        int num = 75834;
        int even = 0;
        int odd = 0;
        int digit;

        do {
            digit = num % 10;

            if (digit % 2 == 0) {
                even += digit;
            } else {
                odd += digit;
            }

            num /= 10;

        } while (num > 0);
    }
}
