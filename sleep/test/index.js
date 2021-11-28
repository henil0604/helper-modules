const sleep = require("../");

async function run() {
    console.log("Saying Hello in 2 seconds");
    await sleep(2000);
    console.log("Hello World"); // "Hello World" After 2 Seconds
}

run();