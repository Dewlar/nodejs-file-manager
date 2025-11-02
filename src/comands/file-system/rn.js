import { rename } from 'fs/promises';
import path from 'path';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function rn(oldName, newName) {
  try {
    const oldPath = path.resolve(getCurrentDirectory(), oldName);
    const newPath = path.resolve(getCurrentDirectory(), newName);
    await rename(oldPath, newPath);
  } catch {
    console.log('Operation failed');
  }
}
