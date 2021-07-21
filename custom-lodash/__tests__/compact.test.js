import compact from '../src/compact';

test('compact should creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey', () => {
    expect(compact(['a', '', 'c', 'd'])).toEqual(['a', 'c', 'd']);
    expect(compact(['a', false, 'c', 'd'])).toEqual(['a', 'c', 'd']);
    expect(compact([null, 'b', 'c', 'd'])).toEqual(['b', 'c', 'd']);
    expect(compact([undefined, 'b', 'c', 'd'])).toEqual(['b', 'c', 'd']);
    expect(compact([NaN, 'b', 'c', 'd'])).toEqual(['b', 'c', 'd']);
    expect(compact([0, 'b', 'c', 'd'])).toEqual(['b', 'c', 'd']);
    expect(compact([0, undefined, NaN, null, false, 0, ''])).toEqual([]);
    expect(compact(['a', 'c', 'd'])).toEqual(['a', 'c', 'd']);
});
