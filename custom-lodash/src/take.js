function take(arr, num = 1) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`);
    }

    return arr.filter((el, i) => i < num);
}

export default take
