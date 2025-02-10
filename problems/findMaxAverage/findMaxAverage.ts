function findMaxAverage(nums: number[], k: number): number {
    let maxAverage = -Infinity

    
    for(let i = 0; (nums.length - i) >= k ; i++) {
        let subArr = nums.slice(i, k + 1)
        let sum = subArr.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        );
        console.log("sum", sum)
        let average = sum / k

        console.log(average)
        if(average > maxAverage && subArr.length === k) maxAverage = average
    }


    return maxAverage
};


function findMaxAverage2(nums: number[], k: number): number { // Time: O(n), Space: O(1) Sliding Window approach 
    // Find the sum of the first k elements
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    // Set the current sum to the max sum
    let currentSum = maxSum;
    // Iterate through the rest of the array and update the current sum 
    // by adding the next element and subtracting the first element of the window
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
}