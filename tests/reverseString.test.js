import reverseString from '../code/reverseString';

test('empty string', () => {
    expect(reverseString('')).toBe('');
});
test('single character - a', () => {
    expect(reverseString('a')).toBe('a');
});
test('single word - Hello', () => {
    expect(reverseString('Hello')).toBe('olleH');
});
test('multiple words - Hello There', () => {
    expect(reverseString('Hello There')).toBe('erehT olleH');
});
test('multiple words with punctuation/symbols - Hello, how are you?', () => {
    expect(reverseString('Hello, how are you?')).toBe('?uoy era woh ,olleH');
});
test('Numbers only', () => {
    expect(reverseString('1234')).toBe('4321');
});