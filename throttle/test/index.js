const throttle = require("..");

const callback = (msg) => {
    console.log(msg);
}

const throttledCallback = throttle(callback, 1000);
let n = 1;

let interval = setInterval(() => {
    console.log(`interval: ${n}`);
    throttledCallback(`callback called: ${n}`);

    n++
}, 500);


setTimeout(() => {
    clearInterval(interval);
    console.log("interval cleared")
}, 2000);