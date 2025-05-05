import readline from 'readline';
import {getCurrentDirectory, printCWD, setInitialDirectory} from "./src/utils/directory.js";
import {exitHandler, printWelcomeMessage} from "./src/utils/user.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

function handleCommand(input, currentDir) {

}

setInitialDirectory();

printWelcomeMessage();
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
.on('close', () => exitHandler())
.on('SIGINT', () => exitHandler());
