import os from "node:os";
import {homedir} from "os";

export function setInitialDirectory() {
  const homeDir = os.homedir();
  process.chdir(homeDir);
  // process.chdir(homedir());
}

export function getCurrentDirectory() {
  return process.cwd();
}

export function printCWD(directory) {
  console.log(`You are currently in ${directory ? directory : process.cwd()}`);
}
