// to ensur credential
const fusion = (...objs) => {
    let res = {}
    let allkeys = []
    objs.forEach(obj => {
        for (let [key, val] of Object.entries(obj)) {
            if (allkeys.includes(key)) {
                const past = res[key]
                if (Array.isArray(past)) res[key] = past.concat(val)
                if (typeof past === 'string') res[key] = val !== '' ? past + ' ' + val : past
                if (typeof past === 'number') res[key] = val + past
            } else {
                res[key] = val
                allkeys.push(key)
            }
        }
    })
    return res
}

console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // -> { arr: [ 1, '2', 2 ] }
console.log(fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] })); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

console.log(fusion({ str: "salem" }, { str: "alem" })); // -> { str: 'salem alem' }
console.log(fusion({ str: "salem" }, { str: "" })); // -> { str: 'salem ' }

console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })); // -> { a: 20, b: 10, c: 1 }

console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3, 1], c: { d: 3 } } })); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }

console.log(fusion({ a: "hello", b: [] }, { a: 4 })); // -> { a: 4, b: [] })