const pick = (obj, arr) => {
    if (!Array.isArray(arr)) arr = [arr]
    let res = {}
    for (let [key, val] of Object.entries(obj)) {
        if (arr.includes(key)) {
            res[key] = val
        }
    }
    return res
}

const omit = (obj, arr) => {
    if (!Array.isArray(arr)) arr = [arr]
    let res = {}
    for (let [key, val] of Object.entries(obj)) {
        if (!arr.includes(key)) {
            res[key] = val
        }
    }
    return res
}

const agent = { firstName: 'James', lastName: 'Bond', age: 25, email: 'jamesbond@hotmail.com', }
const newAgent = { firstName: 'James', lastName: 'Bond' }
const car = { brand: 'ford', motor: 'v8', year: 2000 }
const newCar = { brand: 'ford', year: 2000 }
const user = { firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false }
const newUser = { ageVerified: false }
const computer = { brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen' }
const tools = { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }
const newtool = { drill: 'bosh' }
const games = { board: 'monopoly', cards: 'poker', dice: 'roulette' }
const newgames = { dice: 'roulette' }
const language = { England: 'english', Spain: 'spanish', Portugal: 'portuguese' }
const newlanguage = { England: 'english', Portugal: 'portuguese' }
const phone = { samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' }

console.log('', pick(agent, ['firstName', 'lastName']), '\n', newAgent)
console.log('', pick(car, ['brand', 'year']), '\n', newCar)
console.log('', pick(user, 'ageVerified'), '\n', newUser)
console.log('', pick(computer, 'graphic'), '\n', {})
console.log('', omit(tools, ['grinders', 'saws']), '\n', newtool)
console.log('', omit(games, ['board', 'cards']), '\n', newgames)
console.log('', omit(language, 'Spain'), '\n', newlanguage)
console.log('', omit(phone, 'iphone'), '\n', phone)

console.log(pick({ something: 5, __proto__: { d: 6 } }, ['proto', 'something']), '\n', {
    something: 5,
})
console.log(omit({ something: 5, __proto__: { d: 6 } }, 'something'), '\n', {})