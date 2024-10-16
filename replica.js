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

const replica = (...objs) => {
    const res = {}
    for(let obj of Object.entries(objs) ){
        console.log(obj);
        
    }
    return res
}

console.log(
    replica(
        {},
        Object.freeze({ line: 'Replicants are like any other machine' }),
        Object.freeze({ author: 'Rich' })
    )/*,
    { line: 'Replicants are like any other machine', author: 'Rich' }
*/)
// 
// console.log(replica({ con: console.log }, { reg: /hello/ })/*, {
    // con: console.log,
    // reg: /hello/,
// }*/)
// 
// console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b/*, 1*/)
// 
// console.log(
    // replica({ a: { b: { c: [123, 1] } } }, { a: { b: { c: '1' } } }).a.b.c/*,
    // '1'
// */)
// 
// console.log(replica({ a: 2 }, { a: [4] }).a/*, [4]*/)
// console.log(replica({ a: { b: [2] } }, { a: [4] }).a/*, [4]*/)
// 
// console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } }).a/*, { b: [4] }*/)
// 
// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } })/*, { a: { b: 1, c: 23 } }*/)
// console.log(
    // replica(
        // {},
        // { a: { b1: 1, c1: 2 } },
        // { a: { b1: { d2: 1, e2: 2 } } },
        // { a: { b1: { d2: { f3: 1, h3: 1 }, e2: { g3: 2 } } } },
        // { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } } } }
    // )/*,
    // { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 } }
// */)
// 