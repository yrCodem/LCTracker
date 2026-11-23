#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void HeapifyDown(vector<int>& heap, int index) {
        int n = heap.size();

        while (true) {
            int left = 2 * index + 1;
            int right = 2 * index + 2;

            int smallest = index;

            if (
                left < n &&
                heap[left] < heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < n &&
                heap[right] < heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest == index) {
                break;
            }

            int temp = heap[smallest];
            heap[smallest] = heap[index];
            heap[index] = temp;
            index = smallest;
        }
    }
};
