import java.util.*;

class Solution {
    public void solve() {
        long n = 50;
        long i = 1;
        long factorial = 1;
        
        do {
            factorial = factorial * i;
            i++;
        } while (i <= n);
    }
}
