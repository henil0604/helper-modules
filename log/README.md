# @helper-modules/log

Easily Log to Console


## Installation

```bash
npm i @helper-modules/log
```

## Usage

### Syntex
```js
log(
    data: any,
    statusColor: String,
    prefix: String
);
```

- Params:
    - `data`: 
        - type: `[Object|String|Array]`
        - default: `""`
    - `statusColor`:
        - type: `String`
        - default: `info`
        - usage: Allows to change the color of Hightlight and log prefix
        - allowed: `log` | `success` | `info` | `warn` | `error` | `dark` | `maganta` | `blue`
    - `prefix`
        - type: `String`
        - default: `<defaultPrefix>`

---

### Common Usage

```js

const log = require("@helper-modules/log");
// or
const { log } = require("@helper-modules/all");

log("Hello World")
```
![image](https://user-images.githubusercontent.com/62794871/141338532-e0bcabf8-ac3d-4b39-abb7-2a2590153962.png)

---

- Other `statusColor`s
```js
log("Hello World", "log");
log("Hello World", "success");
log("Hello World", "warn");
log("Hello World", "error");
log("Hello World", "dark");
log("Hello World", "maganta");
log("Hello World", "blue");
```
![image](https://user-images.githubusercontent.com/62794871/141338744-eb021c4d-e458-4f87-bc44-702709732a78.png)

---

- Javascript Object
```js
log(
    {
        name: "Henil",
        age: 16
    }
)
```
![image](https://user-images.githubusercontent.com/62794871/141338900-4ce03c41-4c94-46eb-a04a-8023ec080243.png)

---


- Highlighting
```js
log("Hello {World}");
log("Hello {World}", "log");
log("Hello {World}", "success");
log("Hello {World}", "warn");
log("Hello {World}", "error");
log("Hello {World}", "dark");
log("Hello {World}", "maganta");
log("Hello {World}", "blue");
```

![image](https://user-images.githubusercontent.com/62794871/141339221-1e3d11c9-eaca-418a-acea-82c88a14dd13.png)

**NOTE**: Text inside `{}` will be colored same as provided `statusColor`

---

- Custom Prefix
```js
log("Hello World", "warn", "[MY-PREFIX]")
```

![image](https://user-images.githubusercontent.com/62794871/141339483-74792743-c2b4-43e7-8d83-c8e65ebce3ff.png)

---

- Default Prefix
```js
log.setDefaultPrefix("[SYSTEM]");

log("With New Prefix!", "success")
```

![image](https://user-images.githubusercontent.com/62794871/141339695-339a118c-b063-4b4b-8229-447724e08e0e.png)

---

### Log Prevention
If you want to Prevent Log to console you can set `LOG` key to `false` on your environment variables. Now Even if you call `log` function nothing will be logged to console. This helps for production builds.

```env
LOG=false
```
```js
log("This will not be Logged")
```

After Setting `LOG` to `false`; `log` module is kind of useless as it simply returns `null`.