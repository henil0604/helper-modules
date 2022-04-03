const throttle = (callback, delay) => {

    // Conditional Checking
    const check1 = callback === undefined || callback === null;
    const check2 = delay === undefined || delay === null;
    const check3 = typeof callback !== "function" || typeof delay !== "number";

    if (check1 || check2 || check3) {
        throw new Error("throttle: please provide correct type of arguments");
    }

    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            callback(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }

        callback(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}


module.exports = throttle;