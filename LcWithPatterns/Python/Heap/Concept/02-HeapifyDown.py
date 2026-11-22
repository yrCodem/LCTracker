def HeapifyDown(heap: list[int], index: int) -> None:
    n = len(heap)

    while True:
        left = 2 * index + 1
        right = 2 * index + 2

        smallest = index
        
        if (
            left < n and
            heap[left] < heap[smallest]
        ):
            smallest = left

        if (
            right < n and
            heap[right] < heap[smallest] 
        ):
            smallest = right

        if smallest == index:
            break

        heap[smallest], heap[index] = heap[index], heap[smallest]
        index = smallest
