/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let filtered_zeroes = nums.filter((num) => num === 0)
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            i--
        }
    }

    nums.push(...filtered_zeroes)
    
};