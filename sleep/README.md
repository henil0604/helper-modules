# @helper-modules/sleep

Allows to delay the process


## Installation

```bash
npm i @helper-modules/sleep
```

## Usage

### Syntex
```js
sleep(ms: Number);
```

- Params:
    - `ms`:
        - type: `Number`
        - default: `undefined`


### Common Usage

```js
const sleep = require("@helper-modules/sleep");
// or
const { sleep } = require("@helper-modules/all");

async function run(){
    console.log("Saying Hello in 2 seconds");
    await sleep(2000);
    console.log("Hello World"); // "Hello World" After 2 Seconds
}

run();

```

`sleep` helper-module returns `Promise` which will resolve after the given number of milliseconds. Which Simply use `setTimeout` native Javascript function.