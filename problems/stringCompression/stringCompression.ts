function compress(chars: string[]): number {
    let index = 0; // index to place the compressed character
    let i = 0; // index to iterate through the chars array

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        // Count the number of occurrences of the current character
        while (chars[i] === char) {
            i++;
            count++;
        }

        // Place the character in the result
        chars[index++] = char;

        // If the character count is greater than 1, place the count in the result
        if (count > 1) {
            for (let c of count.toString()) {
                chars[index++] = c;
            }
        }
    }

    // The new length of the compressed array
    console.log(index)
    return index;
}