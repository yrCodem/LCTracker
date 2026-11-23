"use strict";
// General template to write the HeapifyUp Code
function HeapifyUp(heap, index) {
    while (index > 0) {
        // The first step is to declare the parent
        const parent = Math.floor((index - 1) / 2);
        // Checking if the parent is smaller than the next coming element
        if (heap[parent] <= heap[index]) {
            break; // the loop stops because the condition for the Min Heap is satisfied already
        }
        [heap[parent], heap[index]] = [heap[index], heap[parent]]; // Swap Condition if the condition is not satisfied that means if [parent > child/index] then it swaps the parent and index
        index = parent;
    }
}
