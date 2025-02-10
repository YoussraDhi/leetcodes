/**
 * Recursively ensures the heap property for a subtree rooted at index `i` in a min-heap.
 * 
 * @param heap - The array representation of the heap.
 * @param i - The index of the root of the subtree to heapify.
 * @param n - The size of the heap.
 * 
 * This function compares the value at index `i` with its left and right children,
 * and if the value at `i` is greater than either of its children, it swaps the value
 * with the smallest child and recursively calls `heapify` on the affected subtree.
 */

function heapify(heap: number[], i: number, n: number): void {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && heap[left] < heap[smallest]) {
        smallest = left;
    }
    if (right < n && heap[right] < heap[smallest]) {
        smallest = right;
    }
    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        heapify(heap, smallest, n);
    }
}

/**
 * Converts an array into a min-heap.
 * 
 * @param heap - The array to be converted into a min-heap.
 * @returns The array transformed into a min-heap.
 * 
 * This function builds a min-heap from an unordered array by calling the `heapify`
 * function starting from the last non-leaf node up to the root node.
 */
function minHeap(heap: number[]): number[] {
  const n = heap.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(heap, i, n);
  }
  return heap;
}