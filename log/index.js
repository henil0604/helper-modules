const chalk = require("chalk");
const env = require("@helper-modules/env");

let defaultPrefix = ">";

let log = (data = "", statusColor = "info", prefix = defaultPrefix) => {

    const canBeLogged = env("LOG") == undefined || env("LOG") == null ? true : env("LOG")

    if (!canBeLogged) {
        return null;
    }

    data.__proto__.canBeFormatted = true;

    if (typeof data == "object") {
        try {
            data = JSON.stringify(data, null, 4);
            data.__proto__.canBeFormatted = false;
        } catch (e) { }
    }

    if (prefix == undefined || prefix == null) {
        prefix = defaultPrefix;
    }

    let t = `${prefix} `;
    let color = chalk.whiteBright;

    if (statusColor == "log") {
        color = chalk.whiteBright
    }
    if (statusColor == "success") {
        color = chalk.greenBright;
    }
    if (statusColor == "info") {
        color = chalk.cyanBright;
    }
    if (statusColor == "warn") {
        color = chalk.yellowBright;
    }
    if (statusColor == "error") {
        color = chalk.redBright;
    }
    if (statusColor == "dark") {
        color = chalk.blackBright;
    }
    if (statusColor == "magenta") {
        color = chalk.magentaBright;
    }
    if (statusColor == "blue") {
        color = chalk.blueBright;
    }

    t = color(t)

    t += data;
    const formatRegex = /\{.+?\}/g;

    if (
        data.__proto__.canBeFormatted &&
        formatRegex.test(data)
    ) {

        let matches = data.match(formatRegex);

        matches.forEach(e => {
            const formattedString = e.replace(/\{|\}/g, ``)
            const coloredString = color(formattedString);
            t = t.replace(e, coloredString);
        })
    }

    console.log(t);

    return t;
}

log.__proto__.setDefaultPrefix = (prefix = "") => { defaultPrefix = prefix };
log.__proto__.chalk = chalk;

module.exports = log;