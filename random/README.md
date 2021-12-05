# @helper-modules/random

Generate random String, Number and color.


## Installation

```bash
npm i @helper-modules/random
```

## Usage

### Syntex
```js
random(length: Number);
```

- Params:
    - `length`: 
        - type: `Number`
        - default: `10`
        - description: Length of string

-------


### Random Number

```js
random.number(min: Number, max: Number);
```

- Params:
    - `min`: 
        - type: `Number`
        - default: `0`
        - description: Minimum number
    - `max`: 
        - type: `Number`
        - default: `100`
        - description: Maximum number

-------

### UUID
```js
random.uuid();
```
- It uses `uuidv4` for generating UUIDs

-------

### Random Color

```js
random.color();
```