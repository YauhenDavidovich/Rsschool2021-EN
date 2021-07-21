const pushToArray = (array, ...elements) => [...array, ...elements];

const chunk = (array, chunkSize) => {
    let chunks = [];
    let chunkArray = [];
    let chunkArrayLength = 0;

    for(let value of array) {
        chunkArray = pushToArray(chunkArray, value);
        chunkArrayLength++;

        if(chunkArrayLength === chunkSize) {
            chunks = pushToArray(chunks, chunkArray);
            chunkArray = [];
            chunkArrayLength = 0;
        }
    }

    return chunkArrayLength > 0 ? pushToArray(chunks, chunkArray) : chunks;
}

export default chunk;
