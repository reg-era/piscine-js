const throttle = (func, wait) => {
    let stop = false

    return (...args) => {
        if (!stop) {
            func(...args)
            stop = true
            setTimeout(()=>{
                stop = false
            }, wait)
        }
    }
}

const opThrottle = (func, delay, { trailing = false, leading = false } = {}) => {
    let stop
    return (...args) => {
        if (!stop) {
            if (leading) {
                func(...args)
            }
            stop = true;
            setTimeout(() => {
                if (trailing && !leading) {
                    func(...args)
                }
                stop = false
            }, delay)
        }
    }
}