/**
 * Searches for a given string in a trie data structure.
 *
 * @param {string} trie - The root node of the trie represented as a string.
 * @param {string} str - The string to search for in the trie.
 * @returns {boolean} - Returns `true` if the string is found in the trie, otherwise `false`.
 *
 * @example
 * const trie = {
 *   a: {
 *     p: {
 *       p: {
 *         l: {
 *           e: {}
 *         }
 *       }
 *     }
 *   }
 * };
 * findStringWithTrie(trie, 'apple'); // returns true
 * findStringWithTrie(trie, 'app'); // returns true
 * findStringWithTrie(trie, 'apricot'); // returns false
 *
 * @remarks
 * The function assumes that the trie is represented as a nested object where each character
 * of the string is a key in the object. The function iterates through each character of the
 * input string and checks if it exists in the trie. If any character is not found, the function
 * returns `false`. If all characters are found, the function returns `true`.
 */
function findStringWithTrie(trie: string, str: string): boolean {
    let node = trie;
    for (let i = 0; i < str.length; i++) {
        const index = str.charCodeAt(i) - 97;
        if (!node[index]) {
        return false;
        }
        node = node[index];
    }
    return true;
}