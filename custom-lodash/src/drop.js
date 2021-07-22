const shift = array => {
    const [, ...restArray] = array;
    return restArray;
}

const drop = (array, n = 1) => {
    if(n === 0) return array;
    if(n === 1) return shift(array);

    let dropArray = array;

    do {
        dropArray = shift(dropArray);
        n--;
    } while(n > 0);

    return dropArray;
}

export default drop;
