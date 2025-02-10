function merge(left: number[], right: number[]): number[] {
    let i = 0;
    let j = 0;
    const mergedArr: number[] = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
        mergedArr.push(left[i]);
        i++;
        } else {
        mergedArr.push(right[j]);
        j++;
        }
    }
    return mergedArr.concat(left.slice(i)).concat(right.slice(j));
}
    

function mergeSortArr(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSortArr(arr.slice(0, mid));
  const right = mergeSortArr(arr.slice(mid));
  return merge(left, right);
}


