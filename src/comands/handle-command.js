import {printCWD} from "../utils/directory.js";
import {up} from "./navigation/up.js";
import {cd} from "./navigation/cd.js";
import {ls} from "./navigation/ls.js";

export async function handleCommand(input) {
  const [command, ...args] = input.trim().split(/\s+/);

  try {
    switch (command) {
      case 'up':
        await up();
        break;
      case 'cd':
        await cd(args[0]);
        break;
      case 'ls':
        await ls();
        break;
      default:
        console.log('Invalid input');
    }
  } catch (e) {
    console.log('Operation failed');
  } finally {
    printCWD();
  }
}
