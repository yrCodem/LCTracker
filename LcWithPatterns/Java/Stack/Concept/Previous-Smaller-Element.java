import java.util.*;

class Solution {
    public int[] previousSmallerElement(int[] arr) {
        int n = arr.length;
        Deque<Integer> stack = new ArrayDeque<>();
        int[] result = new int[n];
        Arrays.fill(result, -1);

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && stack.peekLast() >= arr[i]) {
                stack.pollLast();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peekLast();
            }

            stack.addLast(arr[i]);
        }

        return result;
    }
}
