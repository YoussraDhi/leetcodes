/**
 * Recursively performs a binary search on a sorted array to find the index of a target value.
 *
 * @param arr - The sorted array of numbers to search within.
 * @param target - The number to search for in the array.
 * @param left - The left boundary index for the current search range.
 * @param right - The right boundary index for the current search range.
 * @returns The index of the target value if found, otherwise -1.
 *
 * @remarks
 * This function uses a divide-and-conquer approach to search for the target value.
 * It repeatedly divides the search range in half until the target value is found or the range is empty.
 * The time complexity of this algorithm is O(log n).
 *
 * Recursion is a technique where a function calls itself in order to solve a problem.
 * In this case, `binarySearchRecursiveHelper` calls itself with updated boundaries (`left` and `right`)
 * to narrow down the search range. The base case for the recursion is when the `left` index exceeds
 * the `right` index, indicating that the target value is not present in the array.
 */

function binarySearchRecursiveHelper(arr: number[], target: number, left: number, right: number): number {
    if (left > right) return -1;
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursiveHelper(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursiveHelper(arr, target, left, mid - 1);
    }
}

function binarySearchRecursive(arr: number[], target: number): number {
  return binarySearchRecursiveHelper(arr, target, 0, arr.length - 1);
}