const defaultCurry = (obj1) => (obj2) => ({ ...obj1, ...obj2 })

const mapCurry = (func) => (obj) => {
    const res = {}
    for (let [k, v] of Object.entries(obj)) {
        const [newk, newv] = func([k, v])
        // console.log(newk,newv);
        res[newk] = newv
    }
    return res
}

const reduceCurry = (func) => (obj, acc = 0) => {
    for (let [k, v] of Object.entries(obj)) {
        acc = func(acc, [k, v]);
    }

    return acc;
};

const filterCurry = func => obj => {
    const res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (func([k, v])) {
            res[k] = v
        }
    }
    return res;
}

const reduceScore = (obj, acc = 0) => {
    const newobj = filterCurry(([k, v]) => v.isForceUser)(obj);
    return reduceCurry((acc, [k, v]) => acc + v.pilotingScore + v.shootingScore)(newobj, acc);
}

const filterForce = (obj) => {
    return filterCurry(([k, v]) => (v.isForceUser && v.shootingScore >= 80))(obj);
}

const mapAverage = (obj) => {
    return mapCurry(([k, v]) => {
        const averageScore = (v.pilotingScore + v.shootingScore) / 2
        return [k, defaultCurry(v)({ averageScore })]
    }
    )(obj)
}

const personnel = {
    lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
    sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
    zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
    ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
    calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
}

const filter = {
    calebDume: { id: 11, isForceUser: true, pilotingScore: 71, shootingScore: 85 },
}
const total = {
    sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false, averageScore: 86 },
    zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false, averageScore: 39.5 },
    lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true, averageScore: 77 },
    ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true, averageScore: 55 },
    calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true, averageScore: 78 },
}



// console.log(defaultCurry({ http: 403 })({})/*, { http: 403 }*/)
// 
// console.log(defaultCurry({ http: 403, connection: 'close' })({ http: 200 })/*, {
// http: 200,
// connection: 'close',
// }*/)
// 
// 
// console.log(defaultCurry(Object.freeze({ http: 403 }))(Object.freeze({ http: 200 }))/*, {
// http: 200,
// }*/)
// 
// 
// console.log(
// defaultCurry({ http: 403, age: 0, connection: 'close' })({
// http: 200,
// age: 30,
// connection: 'keep-alive',
// content_type: 'text/css',
// })/*,
// { http: 200, age: 30, connection: 'keep-alive', content_type: 'text/css' },
// */)

// 
// console.log(mapCurry(([k, v]) => [`${k}🤙🏼`, `${v}🤙🏼`])({ emoji: 'cool' })/*, {
// 'emoji🤙🏼': 'cool🤙🏼',
// }*/)
// 
// 
// console.log(
// reduceCurry((acc, [k, v]) => acc.concat(' ', `${k}:${v.id}`))(
// personnel,
// 'personnel:',
// )/*,
// 'personnel: lukeSkywalker:5 sabineWren:82 zebOrellios:22 ezraBridger:15 calebDume:11',
// */)

// 
// console.log(filterCurry(([, v]) => v.id > 22)(personnel)/*, {
// sabineWren: {
// id: 82,
// pilotingScore: 73,
// shootingScore: 99,
// isForceUser: false,
// },
// }*/)

// console.log(reduceScore(personnel, 0)/*, 420*/)
// console.log(reduceScore(personnel, 420)/*, 840*/)
// 
// console.log(filterForce(personnel), /*ctx.filter*/)
// 
console.log(mapAverage(personnel), /*ctx.total*/)

