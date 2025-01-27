function isPalindrome(x: number): boolean {
    let arr = x.toString().split("");
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i] != arr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function isPalindrome2(x: number): boolean {
    return x.toString().split("").reverse().join("") == x.toString();
}