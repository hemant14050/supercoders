const childProcess = require("child_process");

// const command = childProcess.spawn("node", ["childprocess2.js"]);
// const command = childProcess.spawn("dir",);
let command = null;
// console.log(process.platform);
if (process.platform === "win32") {
    command = childProcess.spawn("cmd", ["/c", "dir"]);
} else {
    command = childProcess.spawn("ls", ["-a"]);
}

command.stdout.on("data", function(data) {
    console.log(data.toString());
});

command.on("close", function(code) {
    console.log("Process quit with code : " + code);
});

command.on("error", function(err) {
    console.log("Error : " + err);
});