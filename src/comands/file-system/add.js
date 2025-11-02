import { writeFile } from 'fs/promises';
import path from 'path';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function add(fileName) {
  try {
    const fullPath = path.resolve(getCurrentDirectory(), fileName);
    await writeFile(fullPath, '', { flag: 'wx' }); // wx = fail if exists
  } catch {
    console.log('Operation failed');
  }
}
