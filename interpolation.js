// `step`, `start`, `end`, `callback` and `duration`
const interpolation = (obj) => {
    const diff = (obj.end - obj.start) / obj.step
    const wait = obj.duration / obj.step
    let time

    let x = obj.start
    let y = obj.duration / obj.step
    let i = 0

    time = setInterval(() => {

        obj.callback([x, y])

        x += diff
        y += wait

        i++
        if (i >= obj.step) {
            clearInterval(time) 
        }
    }, wait)
}
