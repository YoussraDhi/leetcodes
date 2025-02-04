// Find greatest common divisor of strings.

function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return ""
    }

    let gcd = (a: number, b: number): number => {
        return b === 0 ? a : gcd(b, a % b)
    }

    return str1.substring(0, gcd(str1.length, str2.length))
};