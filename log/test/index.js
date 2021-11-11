// Importing Modules
const log = require("../");


// Common Usage
log("Hello World");
log("Hello World", "log");
log("Hello World", "success");
log("Hello World", "warn");
log("Hello World", "error");
log("Hello World", "dark");
log("Hello World", "maganta");
log("Hello World", "blue");


// Passing Object
log(
    {
        name: "Henil",
        age: 16
    }
)


// Highlighting
log("Hello {World}");
log("Hello {World}", "log");
log("Hello {World}", "success");
log("Hello {World}", "warn");
log("Hello {World}", "error");
log("Hello {World}", "dark");
log("Hello {World}", "maganta");
log("Hello {World}", "blue");

// Custom Prefix
log("Hello World", "warn", "[MY-PREFIX]")

// Setting Default Prefix
log.setDefaultPrefix("[SYSTEM]");

log("With New Prefix!", "success")