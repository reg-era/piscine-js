const deepCopy = (obj) => {
    // return structuredClone(obj)

    if (obj instanceof RegExp) return new RegExp(obj)

    if (obj === undefined) return obj

    if (typeof obj !== 'object') return obj

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item))
    }

    return Object.keys(obj).reduce((acc, k) => {
        acc[k] = deepCopy(obj[k])
        return acc
    }, {})
}




// Test cases
const testCases = [
    { user: 'mika', age: 37 },
    [1, 'a'],
    [console.log, /hello/],
    { a: { b: { c: 1 } } },
    [1, [2, [true]]],
    [{ a: () => { } }, ['b', { b: [3] }]],
    { undef: undefined }
];

// Running deepCopy on each test case and logging the results
testCases.forEach((testCase, index) => {
    const copy = deepCopy(testCase);
    console.log(`Test case ${index + 1 }:\n--->`, copy);
});
