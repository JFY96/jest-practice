import calculator from "../code/calculator";

test('add - 1+2', () => {
    expect(calculator.add(1,2)).toBe(3);
});
test('subtract - 2-1', () => {
    expect(calculator.subtract(2,1)).toBe(1);
});
test('divide - 1/2', () => {
    expect(calculator.divide(1,2)).toBe(0.5);
});
test('divide - 2/1', () => {
    expect(calculator.divide(2,1)).toBe(2);
});
test('multiply - 2*3', () => {
    expect(calculator.multiply(2,3)).toBe(6);
});