function maxOperations(nums: number[], k: number): number {

    let totalOperations = 0
    let left = 0
    let right = nums.length - 1
    
    // Time : nlogn + n -> O(nlogn)
    // Space: 0(1)
    nums.sort((a, b) => (a - b)) // O(nlogn) inplace


    while (left < right) {
        const tmpSum = nums[left] + nums[right]

        if(tmpSum === k) {
            totalOperations += 1
            left++
            right--
        } else if (tmpSum < k) {
            left++
        } else {
            right--
        }
    }

    return totalOperations
};