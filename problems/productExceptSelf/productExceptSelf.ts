function productExceptSelf(nums: number[]): number[] {
    const len = nums.length; 
    const res: number[] = new Array(len).fill(1); 
 
    // calculate left product
    let leftProduct = 1;
    for(let i = 0; i < len; i++) {
     res[i] = leftProduct
     leftProduct *= nums[i]
    }
 
    // calculate right product
    let rightProduct = 1
    for(let i = len - 1; i>=0 ; i--) {
     res[i] *= rightProduct;
     rightProduct *= nums[i]
    }
 
    return res
};
 


// Start with an empty row of boxes:

// We make a new row of boxes and put the number 1 in each box. This is our starting point.
// Look at the boxes from left to right:

// We start from the first box and move to the right.
// For each box, we remember the number we have seen so far (we call this leftProduct).
// We put this leftProduct number in our new box.
// Then, we multiply leftProduct by the number in the current box to update it for the next box.
// Look at the boxes from right to left:

// Now, we start from the last box and move to the left.
// For each box, we remember the number we have seen so far (we call this rightProduct).
// We multiply the number in our new box by this rightProduct.
// Then, we multiply rightProduct by the number in the current box to update it for the next box.
// Return the new row of boxes:

// After we finish looking from both directions, our new row of boxes has the special numbers we wanted.