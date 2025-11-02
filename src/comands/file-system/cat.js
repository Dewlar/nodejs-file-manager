import { createReadStream } from 'fs';
import path from 'path';
import {getCurrentDirectory} from "../../utils/directory.js";

export async function cat(filePath) {
  try {
    const fullPath = path.resolve(getCurrentDirectory(), filePath);
    const stream = createReadStream(fullPath, { encoding: 'utf-8' });

    stream.on('error', () => console.log('Operation failed'));
    stream.pipe(process.stdout);
  } catch {
    console.log('Operation failed');
  }
}
