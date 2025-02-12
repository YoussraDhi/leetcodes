function binarySearchIterative(arr: number[], target: number): boolean {
    let left = 0;
    let right = arr.length - 1; 

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if(arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return false;
}