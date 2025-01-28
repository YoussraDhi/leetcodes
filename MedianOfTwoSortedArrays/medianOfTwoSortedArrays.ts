function calcMedian(a, b) {
    return (a + b) / 2
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedArr = [...nums1,...nums2].sort(function(a, b){return a-b})
    let median = 0

    if(mergedArr.length % 2 !== 0) {
        let midIndex = Math.floor(mergedArr.length / 2)
        median =  mergedArr[midIndex]
    } else {
        let midVal1 = (mergedArr.length / 2) - 1 
        let midVal2 = midVal1 + 1

        median =  calcMedian(mergedArr[midVal1], mergedArr[midVal2])
    }
  
    return median
}