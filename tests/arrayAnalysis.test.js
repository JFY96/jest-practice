import arrayAnalysis from '../code/arrayAnalysis';

test('empty array', () => {
    expect(arrayAnalysis([]))
        .toEqual({
            average: 0,
            min: 0,
            max: 0,
            length: 0
        });
});
test('single element', () => {
    expect(arrayAnalysis([0]))
        .toEqual({
            average: 0,
            min: 0,
            max: 0,
            length: 1
        });
});
test('standard case', () => {
    expect(arrayAnalysis([1,8,3,4,2,6]))
        .toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
});