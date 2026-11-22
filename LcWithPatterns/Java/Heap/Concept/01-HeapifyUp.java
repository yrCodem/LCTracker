import java.util.*;

class Solution {
    public void HeapifyUp(List<Integer> heap, int index) {
        while (index > 0) {
            int parent = (index - 1) / 2;

            if (heap.get(parent) <= heap.get(index)) {
                break;
            }

            int temp = heap.get(parent);
            heap.set(parent, heap.get(index));
            heap.set(index, temp);
            index = parent;
        }
    }
}
