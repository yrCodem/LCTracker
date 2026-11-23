// General template for writing the HeapifyUp Max Heap code

export{};


function HeapifyUp(heap: number[], index: number): void{

    while(index > 0){
        const parent = Math.floor((index - 1) / 2)

        if (
            heap[parent] > 0 &&
            heap[parent] >= heap[index]

        ){
            break
        }

        heap[parent], heap[index] = heap[index], heap[parent]
        index = parent

    }
}