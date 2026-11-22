def HeapifyUp(heap: list[int], index: int) -> None:
    while index > 0:
        parent = (index - 1) // 2

        if heap[parent] <= heap[index]:
            break

        heap[parent], heap[index] = heap[index], heap[parent]
        index = parent
