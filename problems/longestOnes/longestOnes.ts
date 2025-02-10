function longestOnes(nums: number[], k: number): number {
    // Time: O(n)
    // Space: O(1)
    let i = 0, j = 0
  
    for (; j < nums.length; j++) {
      if(nums[j] === 0) k-- // flip 0 to 1
      if(k < 0) { // if k < 0, we need to move i to the right until k >= 0
          if(nums[i] == 0) k++ // if nums[i] is 0, we need to add 1 to k
          i++ // move i to the right
      }
    }
  
    return j - i // return the length of the window
  };
  