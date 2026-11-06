import java.util.*;

class Solution {
    public int[] nextGreaterElement(int[] arr) {
        int n = arr.length;
        List<Integer> stack = new ArrayList<>();
        int[] result = new int[n];
        Arrays.fill(result, -1);

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.get(stack.size() - 1) <= arr[i]) {
                stack.remove(stack.size() - 1);
            }
            if (!stack.isEmpty()) {
                result[i] = stack.get(stack.size() - 1);
            }
            stack.add(arr[i]);
        }
        return result;
    }
}
