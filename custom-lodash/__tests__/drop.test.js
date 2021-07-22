import drop from '../src/drop';

test('should return a slice of array with n elements dropped from the beginning', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 4)).toEqual([]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
});
