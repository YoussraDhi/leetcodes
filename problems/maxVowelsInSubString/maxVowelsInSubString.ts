function maxVowels(s: string, k: number): number {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVowels = 0

    s.split('')

    for(let i = 0; i < k; i++) {
        let nb = 0
        if(vowels.includes(s[i])) {
           maxVowels  += 1
        }
    }

    let currVowels = maxVowels

    // Slide the window across the string
    for(let i = k; i < s.length; i++) {
        // Add the new character to the window
        if(vowels.includes(s[i])) {
            currVowels += 1 
        }

        // Remove the character the is left behind
        if(vowels.includes(s[i - k])) {
            currVowels -= 1
        }

        // update the maximum count of vowels
        maxVowels = Math.max(maxVowels, currVowels)
    }

    return maxVowels
};