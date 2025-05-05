import readline from 'readline';
import {getCurrentDirectory, printCWD, setInitialDirectory} from "./src/utils/directory.js";

function parseArgs() {
  const cliArg = process.argv.find(arg => arg.startsWith('--username='));
  const envArg = process.env.npm_config_username;
  if (cliArg) return cliArg.split('=')[1];
  if (envArg) return envArg;
  return 'Anonymous';
}

const username = parseArgs();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

function exitHandler(username) {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
}

function handleCommand(input, currentDir) {

}

setInitialDirectory();

console.log(`Welcome to the File Manager, ${username}!`);
printCWD(getCurrentDirectory());
rl.prompt();

rl.on('line', async (input) => {
  const trimmed = input.trim();
  if (trimmed === '.exit') {
    exitHandler(username);
  } else {
    try {
      await handleCommand(trimmed);
      rl.prompt();
    } catch {
      console.log('Operation failed');
    } finally {
      printCWD(getCurrentDirectory());
      rl.prompt();
    }
  }
});


rl
.on('close', () => exitHandler(username))
.on('SIGINT', () => exitHandler(username));
