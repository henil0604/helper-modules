const debounce = require("..")

const callback = (msg) => {
    console.log(msg);
}

const debouncedCallback = debounce(callback, 2000);

let interval = setInterval(() => {
    console.log("interval");
    debouncedCallback("callback called");
}, 500);

setTimeout(() => {
    console.log("clearing interval")
    clearInterval(interval);
}, 3000);