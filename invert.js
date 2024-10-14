const invert = (obj) => {
    let res = {};
    for (let [key, val] of Object.entries(obj)) {
        res[val] = key
    }
    return res
}