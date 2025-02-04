function reverseVowels(s: string): string {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    let vowelsInStr = s.split('').filter((letter) => vowels.includes(letter))

    let reversed = vowelsInStr.reverse()
    let vowelIndex = 0;

    const res = s.split('').map((letter) => {
        if(vowels.includes(letter)) {
            return reversed[vowelIndex++];
        } else {
            return letter;
        }
    }).join('')

    return res
};