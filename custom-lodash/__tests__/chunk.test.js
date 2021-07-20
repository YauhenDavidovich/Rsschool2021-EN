import chunk from '../src/chunk';

test('chunk should create an array of elements split into groups the length of size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    expect(chunk([1, 2, 3, 4, 5, 6], 1)).toEqual([[1], [2], [3], [4], [5], [6]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
});
