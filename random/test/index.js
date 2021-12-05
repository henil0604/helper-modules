const random = require("..");

console.log(random());
console.log(random(30));
console.log(random.number(100, 1000));
console.log(random.uuid());
console.log(random.color());