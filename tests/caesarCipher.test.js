import caesarCipher from '../code/caesarCipher';

test('empty string', () => {
    expect(caesarCipher('', 12)).toBe('');
});
test('shift of 0', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
});
test('all lowercase - shift of 10', () => {
    expect(caesarCipher('hello', 10)).toBe('rovvy');
});
test('Keeps case - shift of 10', () => {
    expect(caesarCipher('How Are You', 10)).toBe('Ryg Kbo Iye');
});
test('shift of 26 (shift of 0)', () => {
    expect(caesarCipher('Hello', 26)).toBe('Hello');
});
test('shift of 27 (shift of 1)', () => {
    expect(caesarCipher('Hello', 27)).toBe('Ifmmp');
});
test('With Punctuation', () => {
    expect(caesarCipher('Hello, how are you?', 5)).toBe('Mjqqt, mtb fwj dtz?');
});