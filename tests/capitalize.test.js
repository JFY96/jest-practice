import capitalize from '../code/capitalize';

test('empty string', () => {
    expect(capitalize('')).toBe('');
});
test('non capitalized word', () => {
    expect(capitalize('hello')).toBe('Hello');
});
test('already capitalized word', () => {
    expect(capitalize('Hello')).toBe('Hello');
});
test('Non alpha first character', () => {
    expect(capitalize('3abc')).toBe('3abc');
});

