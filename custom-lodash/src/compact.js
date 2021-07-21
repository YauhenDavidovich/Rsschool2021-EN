const pushToArray = (array, ...elements) => [...array, ...elements];

const compact = array => {
    let compactArray = [];

    for (let value of array) {
        if(value) compactArray = pushToArray(compactArray, value);
    }

    return compactArray;
}

export default compact;
