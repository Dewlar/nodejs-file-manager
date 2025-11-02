import { mkdir } from 'fs/promises';
import path from 'path';
import { getCurrentDirectory } from "../../utils/directory.js";

export async function createDirectory(dirName) {
  try {
    const fullPath = path.resolve(getCurrentDirectory(), dirName);
    await mkdir(fullPath, { recursive: true }); // there is no error if exists, creates nesting folders
  } catch {
    console.log('Operation failed');
  }
}
