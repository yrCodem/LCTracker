// General template to write the HeapifyDown code

function HeapifyDown(heap: number[], index: number): void{
    const n = heap.length

    while(true){
        const left = 2 * index + 1
        const right = 2 * index + 2

        let smallest = index
        
        // Condition  for the left child to check if it is smallest among the three
        if (
            left < n &&
            heap[left] < heap[smallest]
        ){
            smallest = left
        }

        // COndiion for the right child to check if it smallest among the three
        if(
            right < n &&
            heap[right] < heap[smallest] 
        ){
            smallest = right
        }

        // Condition is the current index is the smallest
        if(smallest === index){
            break
        }

        // Condition for SWAP
        [heap[smallest], heap[index]] = [heap[index], heap[smallest]]
        index = smallest
    }
}