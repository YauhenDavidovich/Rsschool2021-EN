import filter from '../src/filter';

test('Iterates over elements of array, returning an array of all elements predicate returns truthy for.', () => {
    function isEven(v) { return v % 2 === 0;
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], isEven )).toEqual([2, 4, 6, 8]);
     }
});
