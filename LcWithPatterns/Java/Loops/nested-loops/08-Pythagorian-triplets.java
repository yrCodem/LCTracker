import java.util.*;

class Solution {
    public void printPythagoreanTriplets(int n) {
        for (int a = 1; a <= n; a++) {
            for (int b = a + 1; b <= n; b++) {
                for (int c = b + 1; c <= n; c++) {
                    if (a * a + b * b == c * c) {
                        // Matches original logic
                    }
                }
            }
        }
    }
}
