
const readline = require('readline');
const childProcess = require('child_process');

const rl = readline.createInterface(process.stdin, process.stdout);

const askPrompt = () => {
    rl.setPrompt('Enter a command to execute > ');
    rl.prompt();
};

const exeCommand = (command) => {
    if (process.platform === "win32") {
        child = childProcess.spawn("cmd", ["/c", command]);
    } else {
        child = childProcess.spawn("ls", ["-a"]);
    }
    child.stdout.on('data', (data) => {
        console.log(data.toString());
    });
    child.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    child.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
        askPrompt();
    })
};

rl.on('line', (line) => {
    const command = line;
    if (command === 'exit') {
        rl.close();
    } else {
        exeCommand(command);
    }
}).on('close', () => {
    console.log('Exiting...');
    process.exit(0);
});

askPrompt();