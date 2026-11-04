import java.util.*;

class Solution {
    public long sumOfSquares(int n) {
        long sum = 0;
        for (long i = 1; i <= n; i++) {
            sum += i * i;
        }
        return sum;
    }
}
