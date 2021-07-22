const pushToArray = (array, ...elements) => [...array, ...elements];
const take = (array, n = 1) => {
    if(n === 0) return [];
    if(n === 1) return [array[0]];

    let i = 0;
    let takeArray = [];

    for (let value of array) {
        takeArray = pushToArray(takeArray, value);
        i++;
        if(i >= n) return takeArray;
    }

    return array;
}

export default take;
