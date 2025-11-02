import { cp } from './cp.js';
import { rm } from './rm.js';
import path from 'path';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function mv(source, destination) {
  try {
    await cp(source, destination);
    const srcPath = path.resolve(getCurrentDirectory(), source);
    await rm(srcPath);
  } catch {
    console.log('Operation failed');
  }
}
