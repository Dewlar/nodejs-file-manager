import { homedir} from 'os';
import readline from 'readline';
import * as os from "node:os";
console.log('ARGV:', process.argv);
function parseArgs() {
  // const args = process.argv.slice(2);
  // const usernameArg = args.find((arg) => arg.startsWith('--username='));
  // return usernameArg ? usernameArg.split('=')[1] : 'Anonymous';
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

function printCWD() {
  console.log(`You are currently in ${process.cwd()}`);
}

function exitHandler(username) {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
}

function handleCommand(input, currentDir) {

}
function setInitialDirectory() {
  const homeDir = os.homedir();
  process.chdir(homeDir);
  printCWD();
}

let currentDir = homedir();
setInitialDirectory();

console.log(`Welcome to the File Manager, ${username}!`);
printCWD(currentDir);
rl.prompt();

rl.on('line', async (input) => {
  const trimmed = input.trim();
  if (trimmed === '.exit') {
    exitHandler(username);
  } else {
    try {
      currentDir = await handleCommand(trimmed, currentDir);
    } catch {
      console.log('Operation failed');
    } finally {
      printCWD(currentDir);
      rl.prompt();
    }
  }
});
