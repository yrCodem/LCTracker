#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    void HeapifyUp(vector<int>& heap, int index) {
        while (index > 0) {
            int parent = (index - 1) / 2;

            if (heap[parent] > 0 && heap[parent] >= heap[index]) {
                break;
            }

            swap(heap[parent], heap[index]);
            index = parent;
        }
    }
};
