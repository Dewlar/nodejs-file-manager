import { unlink } from 'fs/promises';
import path from 'path';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function rm(filePath) {
  try {
    const fullPath = path.resolve(getCurrentDirectory(), filePath);
    await unlink(fullPath);
  } catch {
    console.log('Operation failed');
  }
}
