import java.util.*;

class Solution {
    public void searchNumber() {
        int[] n = {10, 20, 30, 40, 50};
        int target = 30;
        boolean found = false;

        for (int i = 1; i <= n.length; i++) {
            if (n[i] == target) {
                found = true;
                break;
            }
        }
    }
}
