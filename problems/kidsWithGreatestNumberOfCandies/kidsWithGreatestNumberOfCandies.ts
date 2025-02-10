// n kids w/candies
// candies[i] = nb of candies by kids
// extraCandies => number of extra 

// bool array 

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
     // Find the maximum number of candies any kid currently has
     const maxCandies = Math.max(...candies);

     // Create a result array to store whether each kid can have the greatest number of candies
     const res: boolean[] = candies.map(candy => candy + extraCandies >= maxCandies);
 
     return res;
};