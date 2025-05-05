import {printCWD} from "../utils/directory.js";
import {up} from "./navigation/up.js";
import {cd} from "./navigation/cd.js";
import {ls} from "./navigation/ls.js";
import {cat} from "./file-system/cat.js";
import {add} from "./file-system/add.js";
import {rn} from "./file-system/rn.js";

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
      case 'cat':
        await cat(args[0]);
        break;
      case 'add':
        await add(args[0]);
        break;
      case 'rn':
        await rn(args[0], args[1]);
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
