# @helper-modules/debounce

Allows to debounce function calls.


## Installation

```bash
npm i @helper-modules/debounce
```

## Usage

### Syntex
```js
debounce(callback: Function, delay: Number);
```

- Params:
    - `callback`: 
        - type: `Function`
        - default: `undefined`
        - usage: Callback that will debounce
    - `delay`: 
        - type: `Number`
        - default: `undefined`
        - usage: Delay in milliseconds

-------

## Example

- This function helps a lot when you are calling some function lots of time but you only need to call it when it should be called. 

- Like when user is typing in a input box and you want to make it so that when user stops typing for a while, you send a request to the server for some data fetching.

```js

const debounce = require("@helper-modules/debounce");

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

```

![example](https://user-images.githubusercontent.com/62794871/161425038-6317dd23-3b14-45b8-956a-8494aeeb8055.png)
