/**
 * Function that performs a Caesar Cipher on a String
 * @param {string} string the string to be encrypted
 * @param {number} shift the shift to be applied to each letter
 * @returns {string} 
 */
const caesarCipher = (string, shift) => {
    if (shift === 0) return string;
    return string.replace(/[a-z]/gi, (match) => {
        const charCode = match.charCodeAt(0);
        const codeAtA = charCode < 97 ? 65 : 97; // A is 65 and a is 97
        return String.fromCharCode(((charCode - codeAtA + shift) % 26) + codeAtA);
    });
};

export default caesarCipher;