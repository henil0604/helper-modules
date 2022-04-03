const debounce = (callback, delay) => {

    // Conditional Checking
    const check1 = callback === undefined || callback === null;
    const check2 = delay === undefined || delay === null;
    const check3 = typeof callback !== "function" || typeof delay !== "number";

    if (check1 || check2 || check3) {
        throw new Error("debounce: please provide correct type of arguments");
    }

    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay)
    }

}


module.exports = debounce;