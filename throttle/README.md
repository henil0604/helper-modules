# @helper-modules/throttle

Allows to Throttle function calls.

## Installation

```bash
npm i @helper-modules/throttle
```

## Usage

### Syntex
```js
throttle(callback: Function, delay: Number);
```

- Params:
    - `callback`: 
        - type: `Function`
        - default: `undefined`
        - usage: Callback that will throttle
    - `delay`: 
        - type: `Number`
        - default: `undefined`
        - usage: Delay in milliseconds

-------


## Example

- Throttle is helpful when you want to call a function only once in some millisecond. It helps to avoid the function call when the function is called again within that delay.

```js

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

```

![example](https://user-images.githubusercontent.com/62794871/161426776-218e5719-d485-49fc-a20b-df0148ca75f9.png)