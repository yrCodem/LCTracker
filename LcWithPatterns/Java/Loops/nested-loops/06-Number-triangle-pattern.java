import java.util.*;

class Solution {
    public void generatePattern(int n) {
        for (int i = 1; i <= n; i++) {
            StringBuilder pattern = new StringBuilder();
            for (int j = 1; j <= i; j++) {
                pattern.append(j);
            }
        }
    }
}
