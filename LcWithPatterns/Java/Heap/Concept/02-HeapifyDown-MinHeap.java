import java.util.*;

class Solution {
    public void HeapifyDown(List<Integer> heap, int index) {
        int n = heap.size();

        while (true) {
            int left = 2 * index + 1;
            int right = 2 * index + 2;

            int smallest = index;

            if (
                left < n &&
                heap.get(left) < heap.get(smallest)
            ) {
                smallest = left;
            }

            if (
                right < n &&
                heap.get(right) < heap.get(smallest)
            ) {
                smallest = right;
            }

            if (smallest == index) {
                break;
            }

            int temp = heap.get(smallest);
            heap.set(smallest, heap.get(index));
            heap.set(index, temp);
            index = smallest;
        }
    }
}
