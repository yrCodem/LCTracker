import java.util.*;

class Solution {
    public String solveSeries(int n) {
        StringBuilder series = new StringBuilder();
        for (int i = 0; i <= n; i++) {
            series.append(1 << i);
            if (i < n) {
                series.append(" + ");
            }
        }
        return series.toString();
    }
}
