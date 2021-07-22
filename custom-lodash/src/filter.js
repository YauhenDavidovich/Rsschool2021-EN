function filter(arr, predicate) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }
    for (let elem of arr) {
        if (predicate(elem)) {
            return elem
        }
    }
    return undefined
}

export default filter
