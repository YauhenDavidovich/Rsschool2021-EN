function filter(arr, predicate) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }

    return arr.filter((el, idx, arr) => predicate(el, idx, arr));
}

export default filter
